import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Chart } from 'angular-highcharts';
import { DashboardApiService } from '../services/dashboard-api.service';
//import * as D3 from 'd3';
declare let d3: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private _authservice: AuthService, 
    private _dashboardapi: DashboardApiService) { 
    if(this._authservice.getAuthData() === null){
      this.router.navigate(['']);
    }
    console.log('dashboard check', this._authservice.getAuthData());
  }

  ngOnInit() {
    this.getKeyComponent();
    this.getTopSupplier();
  }

  /*
   * Functionality for Top Supplier
   */
  top_suppliers: Array<any>
  getTopSupplier() {
    this._dashboardapi.getSupplierData().subscribe(data => {
      this.top_suppliers = data.topsupplier;
      //console.log("Top Supplier", this.top_suppliers);
    }, error => {
      console.log("Top Supplier", error);
    })
  }

 /*
  * Chart Functionality for Supplier statistics in Dashboard
  */

  supplier = new Chart({
    chart: {
      type: 'bar',
      marginRight: 60,
    },
    title: {
      text: null
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['Assessments', 'Suppliers', 'General Assessments', 'SOW Assessments'],
      title: {
        text: null
      }
    },
    yAxis: {
      max: 15,
      tickInterval: 2.5,
      title: {
        text: "Count"
      }
    },
    tooltip: {                
      useHTML: true,
      headerFormat: '<small>{point.key}</small><table>',
      pointFormat: '<tr><td style="color: {point.color}">Supplier: </td>' +
                   '<td style="text-align: right"><b>{point.y}</b></td></tr>',
      footerFormat: '</table>'  
    },
    legend: {
      enabled: false
    },         
    plotOptions: {
      bar: {
          pointWidth: 20
      }                                                              
    },
    series: [{
      data: [{ y: 12, color: '#7CB5EC' }, { y: 12, color: '#444349' }, { y: 4, color: '#90EC7D' }, { y: 6, color: '#F7A35B'}],
      
    }],
    navigation: {
      buttonOptions: {
          verticalAlign: 'top',
          theme: {
            states: {
                hover: {
                    fill: '#ffffff'
                },
                select: {
                    fill: '#ffffff'
                }
            }
          }           
      }
     },
    lang: {
        printChart: 'Print Chart',
        downloadPNG: 'Save as PNG',
        downloadJPEG: 'Save as JPG',
        downloadPDF: 'Save as PDF',
        downloadSVG: 'Save as SVG',
        contextButtonTitle: 'Context menu'
    },
    exporting: {       
      buttons: {
          contextButton: {
              menuItems: ['printChart',
              'downloadPDF',
              'downloadJPEG',
              'downloadPNG'
              ],
              symbol: 'url(assets/img/icon/filter-icon.png)'
          }
      }
    }
  });
 
  // add point to chart serie
  // add() {
  //   this.chart.addPoint(Math.floor(Math.random() * 10));
  // }
  
 /*
  * Chart Functionality for Assessment statistics in Dashboard
  */
  assessment = new Chart({
    chart: {
      type: 'bar',
      marginRight: 60,
    },
    title: {
      text: null
    },
    credits: {
      enabled: false
    },
    xAxis: {
      categories: ['Strengths', 'Observations', 'Recommendations', 'Risks', 'Capabilities Count', 'Discount Capabilities'],
      title: {
        text: null
      }
    },
    yAxis: {
      max: 300,
      tickInterval: 100,
      title: {
        text: "Count"        
      }     
    },
    tooltip: {                
      useHTML: true,
      headerFormat: '<small>{point.key}</small><table>',
      pointFormat: '<tr><td style="color: {point.color}">Assessments: </td>' +
                   '<td style="text-align: right"><b>{point.y}</b></td></tr>',
      footerFormat: '</table>'  
    },
    legend: {
      enabled: false
    },         
    plotOptions: {
      bar: {
          pointWidth: 12                               
      }                                                              
    },
    series: [{
      data: [{ y: 280, color: '#7CB5EC' }, { y: 80, color: '#444349' }, { y: 80, color: '#90EC7D' }, { y: 110, color: '#F7A35B'}, { y: 120, color: '#8085E9'}, { y: 110, color: '#F25C81'}]
    }],
    navigation: {
      buttonOptions: {
          verticalAlign: 'top',
          theme: {
            states: {
                hover: {
                    fill: '#ffffff'
                },
                select: {
                    fill: '#ffffff'
                }
            }
          }             
      }
     },
    lang: {
        printChart: 'Print Chart',
        downloadPNG: 'Save as PNG',
        downloadJPEG: 'Save as JPG',
        downloadPDF: 'Save as PDF',
        downloadSVG: 'Save as SVG',
        contextButtonTitle: 'Context menu'
    },
    exporting: {       
      buttons: {
          contextButton: {
              menuItems: ['printChart',
              'downloadPDF',
              'downloadJPEG',
              'downloadPNG'
              ],
              symbol: 'url(assets/img/icon/filter-icon.png)'
          }
      }
    }
  });
  
  /*
  * Key component Functionality in Dashboard
  */

  keyData: Array<any> = [];

  getKeyComponent() {
    this._dashboardapi.getkeyData().subscribe(data => {
        this.keyData = data.words;
        this._setup(this.keyData);
        this._populate();
    }, error => {
        console.log(error);
    });
  }
  private width: number;
  private height: number;
  private words: any;
  private _setup(kdata) {
    console.log("Data", kdata);
    this.words = kdata;
    this.width = 450;
    this.height = 250;
  }
  private _populate() {
    d3.layout.cloud()
      .size([this.width, this.height])
      .words(this.words)
      .padding(2)
      .rotate(function(d) { return d.rotate;})
      .font("Impact")
      .fontSize(function(d) { return d.frequency;})
      .on("end", this.draw)
      .start();
  }
  private draw(words) {
    console.log('width',this.width);
    d3.select("#key-word-cloud").selectAll("svg").remove();
    d3.select("#key-word-cloud")
    .append("svg")
    .attr("width", 450)
    .attr("height", 248)
    .append("g")
    .attr('transform', 'translate(225, 124)')
    .selectAll("text")
    .data(words)
    .enter()
    .append("text")
    .style("font-size", function(d) { return d.frequency; })
    .style("font-family", "Impact")
    .style("fill", function(d, i) { return d.color; })
    .attr("text-anchor", "middle")
    .attr("transform", d => 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')')
    .text(function(d) { return d.text; })
    .on("click", function (d, i){
      window.open(d.url, "_blank");
    });
  }

  /*
  * Expand and collapse Widget
  */
  expand:boolean = true;
  close:boolean = false; 
  expandWidget(event, container) {
     let containerExpand = document.querySelector(container);
     containerExpand.classList.remove('boeing-page-col-6');
     containerExpand.classList.add('panel-fullscreen');
     this.expand = false;
     this.close = true;
  }
  closeWidget(event, container) {
    let containerClose = document.querySelector(container);
    containerClose.classList.add('boeing-page-col-6');
    containerClose.classList.remove('panel-fullscreen');
    this.close = false;
    this.expand = true;
  }
  
  

}

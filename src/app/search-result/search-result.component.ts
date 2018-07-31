import { Component, OnInit, HostBinding } from '@angular/core';
import { SearchApiService } from '../services/search-api.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/bs-datepicker.config';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'search-result-container';

  rows = [];
  columns = [
    {checkboxable: true},
    {prop: 'assessment'},
    {name: 'Locations'},
    {name: 'Score'},
    {name: 'Capability'}
  ];
  selected = [];
  showLimitList = this._commonService.getPerPage();
  selectedLimitList = 5;
  
  showYearList = this._commonService.getListYear();
  selectedYearList = new Date().getFullYear();

  supplierList = ['Eta','Xi','Pi', 'Theta', 'Square'];
  selectedSupplier = "";

  assessmentTypeList = this._commonService.getAssessmentListType();
  selectedAssessment = "";

  rowHeight = 140;
  collapsed() {
    console.log('collapsed');
    if(this.rowHeight == 140) {
      this.rowHeight = 500;
      console.log('collapsed1');
    }
    else {
      this.rowHeight = 140;
      console.log('collapsed2');
    }
  }
  /*
   *Date Picker functionality
   */

  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
  }
  onChecked(data) {
    // let isChecked = data.target.checked;
    // let rowSelected = [];
    // rowSelected = this.rows.splice(0, this.selectedLimitList);
    // console.log(rowSelected);
    // if(isChecked) {
    //   console.log("Checked");
    //   this.selected.push(rowSelected);
    //   rowSelected.forEach((key,value) => {
          
    //   });
    //   this.selected = [ this.rows[1], this.rows[3] ];
    // }
    // else {
    //   console.log("Checked not");
    //   this.selected = [];
    // }
  }
  onActivate(event) {
    console.log('Activate Event', event);
  }
  onLimitChange(newValue) {
    console.log(newValue);
    this.selectedLimitList = newValue;
  }

  onYearChange(year) {
    console.log(year);
    this.selectedYearList = year;
  }

  onSupplierChange(supplier) {
    this.selectedSupplier = supplier;
  }

  onAssessmentChange(type) {
    console.log(type);
    this.selectedAssessment = type;
  }
  // rowcls = (row) => {
  //   console.log(row);
  //   return {
  //     'score': row.score === "9"
  //   };
  // }
  showFilterOption = false;
  searchQuery:any = {
    'searchField':'',
    'searchQuery':''
  };
  constructor(private _searchapi: SearchApiService, private router: Router,
  private _commonService: CommonService) {

    console.log("SearchFields data",this._searchapi.getSearchFields());
    this._searchapi.getSearchData().subscribe(data => {
      //console.log("row data", data.search);
        this.rows = data.search;
        this.searchQuery = this._searchapi.getSearchFields();
        console.log(this.searchQuery);
    }, error => {
      console.log("Search Data", error)
    });
   }
   currentRoute:any;
  ngOnInit() {
    // this.rows.forEach(item => {
    //     console.log(item );
    // })
    // var $navbar = document.querySelector('.nav-item');
    // console.log("navebar active", $navbar);
    // console.log("this.router.url", this.router.url );
    // this.currentRoute = this.router.url;
    // var $navbar = document.querySelector('.nav-item');
    // if(this.currentRoute === "/home/search-results") {
    //   console.log('current true');
    //   $navbar.classList.remove('active');
    // // console.log("navebar active", $navbar);
    // }
    console.log("Show year list", this.showYearList);
  }
  toggleFilterOption(e) {
    this.showFilterOption = !this.showFilterOption;
    console.log(e);
  }
  showMe(r) {
    alert(r.assessment);
    console.log(r);
  }

}

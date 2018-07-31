import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DashboardApiService } from '../../services/dashboard-api.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-supplierlist',
  templateUrl: './supplierlist.component.html',
  styleUrls: ['./supplierlist.component.css']
})
export class SupplierlistComponent implements OnInit {
  @ViewChild('changeSize') el: ElementRef;
  
  rows = [];
  selected = [];

  showLimitList = this._commonService.getPerPage();
  selectedLimitList = 5;

  model: any = {};
  showFilterOption = false;

  showYearList = this._commonService.getListYear();
  selectedYearList = new Date().getFullYear();

  assessmentTypeList = this._commonService.getAssessmentListType();
  selectedAssessment = "";

  constructor(private _supplierapi: DashboardApiService,
    private router: Router,
    private _commonService: CommonService) {
   this._supplierapi.getListSupplierData().subscribe(data => {
       this.rows = data.topsupplier;
   }, error => {
     console.log('Search Data', error);
   });
 }
 
 onLimitChange(newValue) {
  console.log(newValue);
  this.selectedLimitList = newValue;
}

onYearChange(year) {
  console.log(year);
  this.selectedYearList = year;
}

onAssessmentChange(type) {
  this.selectedAssessment = type;
}
  
ngOnInit() {
}

toggleFilterOption(e) {
  this.showFilterOption = !this.showFilterOption;
  console.log(e);
}
onSelect(e) {
  console.log(e);
}

}

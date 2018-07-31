import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplierassessmentdetails',
  templateUrl: './supplierassessmentdetails.component.html',
  styleUrls: ['./supplierassessmentdetails.component.css']
})
export class SupplierassessmentdetailsComponent implements OnInit {

    rows = [];
    selected = [];    
    showLimitList = [5, 10];
    selectedLimitList = 5;  

    constructor(private router: Router) {
       this.fetch((data) => {       
           this.rows = data;
       });
    } 

    fetch(cb) {
      const req = new XMLHttpRequest();
      req.open('GET', 'assets/json/assessmentslist.json');
  
      req.onload = () => {
        cb(JSON.parse(req.response));
      };
  
      req.send();
    }

    onLimitChange(newValue) {
      console.log(newValue);
      this.selectedLimitList = newValue;
    }
  
    ngOnInit() {
    
    }        
}

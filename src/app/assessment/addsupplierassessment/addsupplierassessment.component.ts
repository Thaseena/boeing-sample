import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsupplierassessment',
  templateUrl: './addsupplierassessment.component.html',
  styleUrls: ['./addsupplierassessment.component.css']
})
export class AddsupplierassessmentComponent implements OnInit {
  model: any = {};
  constructor(private router: Router) {}

    myDateValue: Date;
  
    ngOnInit() {
      this.myDateValue = new Date();
    }
  
    onDateChange(newDate: Date) {
      console.log(newDate);
    }

    addSupplierAssessmentCancel() {      
      this.router.navigateByUrl('/assessment');
    }
}



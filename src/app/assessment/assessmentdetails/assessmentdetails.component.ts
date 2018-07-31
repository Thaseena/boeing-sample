import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessmentdetails',
  templateUrl: './assessmentdetails.component.html',
  styleUrls: ['./assessmentdetails.component.css']
})
export class AssessmentdetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}

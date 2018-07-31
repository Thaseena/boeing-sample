import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
    
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
    req.open('GET', 'assets/json/users.json');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
     
  getCellClass({ row, column, value }): any {
    return {
      'is-activate': value === 'Activate',
      'is-deactivate': value === 'Deactivate'
    };
  }
  toggleActivate(event, r) {    
    r.actions = r.actions === "Activate"? "Deactivate" : "Activate";
  }
  onLimitChange(newValue) {
    console.log(newValue);
    this.selectedLimitList = newValue;
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rolelist',
  templateUrl: './rolelist.component.html',
  styleUrls: ['./rolelist.component.css']
})
export class RolelistComponent implements OnInit {

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
    req.open('GET', 'assets/json/roles.json');

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

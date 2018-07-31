import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editrole',
  templateUrl: './editrole.component.html',
  styleUrls: ['./editrole.component.css']
})
export class EditroleComponent implements OnInit {
  model: any = {};
  constructor(private router: Router) { }  

  ngOnInit() {
  }

  roleCancel() {
    this.router.navigateByUrl('/role/rolelist');
  }

}

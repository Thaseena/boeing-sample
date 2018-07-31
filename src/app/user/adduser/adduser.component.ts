import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  model: any = {};
  constructor(private router: Router) { }  

  ngOnInit() {
  }

  userCancel() {
    this.router.navigateByUrl('/user/userlist');
  }

}

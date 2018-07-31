import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  userCancel() {
    this.router.navigateByUrl('/user/userlist');
  }

}

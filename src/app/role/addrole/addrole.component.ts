import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addrole',
  templateUrl: './addrole.component.html',
  styleUrls: ['./addrole.component.css']
})
export class AddroleComponent implements OnInit {
  model: any = {};
  constructor(private router: Router) { }  

  ngOnInit() {
  }

  roleCancel() {
    this.router.navigateByUrl('/role/rolelist');
  }

}

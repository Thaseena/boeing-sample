import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsupplier',
  templateUrl: './addsupplier.component.html',
  styleUrls: ['./addsupplier.component.css']
})
export class AddsupplierComponent implements OnInit {
  model: any = {};
  constructor(private router: Router) { }  
  ngOnInit() {
  }

  supplierCancel() {
    this.router.navigateByUrl('/supplier/supplierlist');
  }

}

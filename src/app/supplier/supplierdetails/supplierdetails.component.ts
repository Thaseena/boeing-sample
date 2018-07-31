import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplierdetails',
  templateUrl: './supplierdetails.component.html',
  styleUrls: ['./supplierdetails.component.css']
})
export class SupplierdetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  supplierCancel() {
    this.router.navigateByUrl('/supplier/supplierlist');
  }

}

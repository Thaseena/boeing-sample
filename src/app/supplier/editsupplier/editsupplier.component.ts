import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editsupplier',
  templateUrl: './editsupplier.component.html',
  styleUrls: ['./editsupplier.component.css']
})
export class EditsupplierComponent implements OnInit {
  model: any = {};
  constructor(private router: Router) { }   
  ngOnInit() {
  }

  supplierCancel() {
    this.router.navigateByUrl('/supplier/supplierlist');
  }

}

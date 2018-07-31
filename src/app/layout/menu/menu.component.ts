import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendHeaderApiService } from '../../services/backend-header-api.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuList: any;
  selectedItem: number = 0;
  route: string;
  constructor(private _backendHeader: BackendHeaderApiService, private router: Router) {
  }

  ngOnInit() {
    this._backendHeader.getMenuNames().subscribe(data => {
      this.menuList = data.menu;
      console.log(this.menuList);
    }, error => {
        console.log(error);
    });
  }

  gotoPage(item) {
    console.log(item);
    this.selectedItem = item.menuId - 1;
    console.log(this.selectedItem);
    // var $navbar: any[] = document.querySelectorAll('.nav-item');
    // var i=0;
    //  ($navbar).forEach(element => {
    //    if(this.selectedItem === i){
    //       $navbar[i].classList.add('active');
    //     }
    //    i++;

    //  });
  }

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { BackendHeaderApiService } from '../../services/backend-header-api.service';
import { SearchApiService } from '../../services/search-api.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('changeSize') el: ElementRef;
  model: any = {};
  profileData: any = {};
  constructor(private _backendProfile: BackendHeaderApiService,
     private _authservice: AuthService, private router: Router, private _searchApi: SearchApiService) { }

  ngOnInit() {
    this._backendProfile.getProfileData().subscribe(data => {
      this.profileData = data.user[0];
      console.log(this.profileData);
    }, error => {
      console.log("Profile Data", error);
    })
    this.model.searchField = 'All';
    this.el.nativeElement.style.width = '50px';
    //console.log('ChangeSize', this.el.nativeElement.style.display);
    //this.profileData = this._authservice.getAuthData();
    //console.log("profile datas", this.profileData);
  }

  onSelectField(data) {
    console.log(data);
    this.model.searchField = data;
    if (data === 'All') {
      this.el.nativeElement.style.width = '50px';
    } else {
      this.el.nativeElement.style.width = '120px';
    }

  }
  searchData(data) {
    console.log("on search data", data);
    this._searchApi.setSearchFields(data);
    this.router.navigate(['/home/search-results']);
    // const $navbar: any[] = document.querySelectorAll('.nav-item');
    //  ($navbar).forEach(element => {
    //    element.classList.remove('active');
    //  });
    // $navbar.classList.remove('active');
  }

  logout() {
    this._authservice.removeAuthData();
    this.router.navigate(['']);
  }
}

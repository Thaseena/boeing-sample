import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { BackendHeaderApiService } from 'src/app/services/backend-header-api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  userAuth = {
    username: 'admin',
    password: 'admin123'
  };
  constructor(private _backendProfile: BackendHeaderApiService, private router: Router, private _authservice: AuthService) { 
    if(this._authservice.getAuthData() !== null) {
      this.router.navigate(['/dashboard']);
    }
    console.log('Login check', this._authservice.getAuthData());
  }

  ngOnInit() {
  }
  login(modelData) {
    console.log(modelData);
    if(this.userAuth.username === modelData.username && this.userAuth.password === modelData.password){
     this._authservice.setAuthData(modelData);
      this.router.navigate(['/dashboard']);
    }
    else {
      alert('username or password invalid');
    }
    //const checkData = this.checkLoginAuth(modelData);
    //console.log("checkdata",checkData);
  }
  /*profileData = [];
  checkLoginAuth(userInfo) {
    this._backendProfile.getProfileData().subscribe(userDetails => {
      console.log('loging from service', userDetails);
      userDetails.user.map(data => {
        console.log("datas from data", data);
        if(data.username === userInfo.username && data.password === userInfo.password) {
          this._authservice.setAuthData(data);
          this.profileData.push(data);
          //this._authservice.setUserData(data);
          //this.router.navigate(['/dashboard']);
        }
      }
      );
    }, error => {
      console.log("Profile Data", error);
    });
    console.log("pushed data",this.profileData);
  } */

}


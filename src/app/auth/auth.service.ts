import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  //userdetail: any;
  setAuthData(authdata) {
    localStorage.setItem('userdata', JSON.stringify(authdata));
  }

  getAuthData() {
    const retrieveData = localStorage.getItem('userdata');
    return JSON.parse(retrieveData);
  }

  removeAuthData() {
    localStorage.removeItem('userdata');
  }
}

import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Globals } from '../globals';
import 'rxjs/add/operator/map';
@Injectable()
export class BackendHeaderApiService {

  constructor(private http: Http, private globals: Globals) { 
    console.log("Backend initiated");
  }
  /*
  * Get the menu name from json data
  */  
  getMenuNames() {
    return this.http.get('assets/json/menu.json', this.globals.globalHttpHeader())
    .map((response: Response) => response.json());
  }

  /*
  * Get the profile from json data
  */  
  getProfileData() {
    return this.http.get('assets/json/profile.json', this.globals.globalHttpHeader())
    .map((response: Response) => response.json());
  }
}

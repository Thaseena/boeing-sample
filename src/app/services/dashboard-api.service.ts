import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Globals } from '../globals';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardApiService {

  constructor(private _http: Http, private _globals: Globals) { 
  }

  /*
  * Get all the key components for Dashboard
  */  
  getkeyData() {
    return this._http.get('assets/json/keycomponent.json', this._globals.globalHttpHeader())
    .map((response: Response) => response.json());
  }

  /*
  * Get top supplier data for Dashboard
  */  
  getSupplierData() {
    return this._http.get('assets/json/supplier.json', this._globals.globalHttpHeader())
    .map((response: Response) => response.json());
  }

  /*
  * Get top supplier data for Dashboard
  */  
  getListSupplierData() {
    return this._http.get('assets/json/listsupplier.json', this._globals.globalHttpHeader())
    .map((response: Response) => response.json());
  }

}

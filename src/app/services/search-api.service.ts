import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Globals } from '../globals';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {

  constructor(private _http: Http, private _globals: Globals) { }


  /*
  * Get Search Data and populate in the search Result grid
  */  
  getSearchData() {
    return this._http.get('assets/json/search.json', this._globals.globalHttpHeader())
    .map((response: Response) => response.json());
  }

  /*
  * Set and get the Search field to show in Search Result page
  */
  searchData: any;
  setSearchFields(data) {
    this.searchData = data;
  }
  getSearchFields(){
    return this.searchData;
  }
}

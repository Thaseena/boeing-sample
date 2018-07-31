import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Globals } from '../globals';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: Http, private _globals: Globals) { }

  /*
  * Get the list of year for Filter
  */
  getPerPage() {
    let pageData: Array<number> = [5, 10];
    return pageData;
  }

  /*
  * Get the list of year for Filter
  */
  getListYear() {
    let years: Array<number> = []
    for(let i=2001;i<2025;i++) {
      years.push(i);
    }
    return years;
  }

  /*
  * Get the list of year for Filter
  */
  getAssessmentListType() {
    let list: Array<string> = ['Full Assessment','Not Assessed','Risk Acceptance Letter'];
   return list;
  }

  /*
  * Get the list of year for Filter
  */
  getAirplaneProgramList() {
    let list: Array<any> = ['737','747','767','777','787','Freighters','Boeing Business Jets'];
   return list;
  }

}

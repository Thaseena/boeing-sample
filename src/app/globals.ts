import { Injectable } from '@angular/core'; 
import { Headers, RequestOptions } from '@angular/http'; 
//import { environment } from '../environments/environment'; 
Injectable() 
export class Globals { 
    globalConfig: any; 
    constructor() { 
        this.globalConfig = JSON.parse(sessionStorage.getItem('sess_global_config')); 
    } 
    /** 
    * Used in each http request as request header 
    */ 
    globalHttpHeader() { 
        let headers = new Headers({ 
        'Content-Type': 'application/json', 
        'Accept': 'application/json', 
        }); 
        let options = new RequestOptions({ headers: headers }); 
        return options; 
    } 
    /** 
    * Used in each http request as request header with token 
    */ 
    globalHttpHeaderToken() { 
        let headers = new Headers({ 
        'Content-Type': 'application/json', 
        'Accept': 'application/json', 
        //'token':JSON.parse( localStorage.getItem( 'currentUser' ) )['token'] 
        }); 
        let options = new RequestOptions({ headers: headers }); 
        return options; 
    } 
    /** 
    * Used in each http request as request header with token 
    */ 
    globalHttpHeaderBody(bodyJson) { 
        let headers = new Headers({ 
        'Content-Type': 'application/json', 
        'Accept':'application/json' 
        }); 
        let options = new RequestOptions ({ 
        headers: headers, 
        body: bodyJson 
        }); 
        return options; 
    } 
    /** 
    * Used in each http request as request header 
    */ 
    globalHttpHeaderCustom(headersJson) { 
        let headers = new Headers(headersJson); 
        let options = new RequestOptions({ headers: headers }); 
        return options; 
    } 
} 

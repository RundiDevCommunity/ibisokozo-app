import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IgisokozoService {

  constructor(private http : HttpClient) {
    //
   }



  getIbisokozo(){
    const header={
      'content-type': 'application/json',
  
    }
    return this.http.get('https://ibisokozo.ksquad.dev/rest_api/inyishu-igisokozo')
  }
}

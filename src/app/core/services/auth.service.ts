import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http : HttpClient,
    private apiService : ApiService) {
    //
   }



  login(body:any){

    return this.apiService.post('/login/', body)
  }




}

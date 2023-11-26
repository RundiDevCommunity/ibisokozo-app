import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/states/auth/auth.state';

@Injectable({
  providedIn: 'root'
})
export class UserService {
token:string=''
token$:Observable<any>

  constructor(
    private http : HttpClient,
    private apiService : ApiService,
    private store : Store) {
    //
    this.token$= this.store.select(AuthState.token)
   }

   ngOnInit(){
    this.token$.subscribe(token =>{
      this.token=token
    })
   }

getUserInfo(){

  console.log('yyy', this.token);
  
  const header={
    'content-type': 'application/json',
    'authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwOTA5MjU4LCJqdGkiOiJhYjJhZTZmYTM1ODI0Njc3OWRhOThlN2ZhMGQ0NjExNCIsInVzZXJfaWQiOjF9.s0efdkRVdKz0HhOZxBDQR3bIARL5pxCvCvgvTVRYPo0'

  }

  return this.http.get('http://127.0.0.1:8000/api/user/', {headers: header})


}

  


}

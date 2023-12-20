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

      console.log('toookk', token);
      
    })
   }

getUserInfo(token:string){

  
  const header={
    'content-type': 'application/json',
    'authorization' : `Token ${token}`

  }

  return this.http.get('http://127.0.0.1:8000/api/user/', {headers: header})


}

getUsersLists(token:string){

  
  const header={
    'content-type': 'application/json',
    'authorization' : `Token ${token}`

  }

  return this.http.get('http://102.134.108.82/api/user-list/', {headers: header})


}

getScore(token:string){

  
  const header={
    'content-type': 'application/json',
    'authorization' : `Token ${token}`

  }

  return this.http.get('http://102.134.108.82/api/score/', {headers: header})


}

  


}

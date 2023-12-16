import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class IgisokozoService {

  constructor(
    private http : HttpClient,
    private apiService : ApiService) {
    //
   }



  getIbisokozo(){

  

    
      return this.apiService.get('/random-igisokozo/')
    
    
}

checkAnswer(selectedAnswer: string, token: string) {
  const body = {
    selected_answer: selectedAnswer
  };

  // Create HttpHeaders instance
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
  });

  return this.http.post('http://127.0.0.1:8000/api/check/check_answer/', body, { headers: headers });
}
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { IgisokozoService } from './services/igisokozo.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],

  providers:[
    AuthService,
    IgisokozoService
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { IgisokozoService } from './services/igisokozo.service';
import { GeneralService } from './services/general.service';
import {UserService} from './services/user.service';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],

  providers:[
    AuthService,
    IgisokozoService,
    GeneralService,
    UserService

  ]
})
export class CoreModule { }

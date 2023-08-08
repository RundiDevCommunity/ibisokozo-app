import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgisokozoComponent } from './igisokozo/igisokozo.component';
import { IgisokozoRoutingModule } from './igisokozo-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    IgisokozoComponent
  ],
  imports: [
    CommonModule,
    IgisokozoRoutingModule,
    SharedModule
  ]
})
export class IgisokozoModule { }

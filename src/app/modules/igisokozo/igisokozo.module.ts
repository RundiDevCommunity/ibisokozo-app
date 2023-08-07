import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgisokozoComponent } from './igisokozo/igisokozo.component';
import { IgisokozoRoutingModule } from './igisokozo-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IgisokozoComponent
  ],
  imports: [
    CommonModule,
    IgisokozoRoutingModule,
  ]
})
export class IgisokozoModule { }

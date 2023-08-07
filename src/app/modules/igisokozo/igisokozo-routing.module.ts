import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IgisokozoComponent } from './igisokozo/igisokozo.component';

const routes:Routes=[
  {path: '', component:IgisokozoComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class IgisokozoRoutingModule { }

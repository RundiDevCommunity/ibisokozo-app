import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgisokozoHomeComponent } from './igisokozo-home/igisokozo-home.component';
import { IgisokozoRoutingModule } from './igisokozo-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LevelOneComponent } from './level-one/level-one.component';



@NgModule({
  declarations: [
    IgisokozoHomeComponent,
    LevelOneComponent
  ],
  imports: [
    CommonModule,
    IgisokozoRoutingModule,
    SharedModule,
    RouterModule

  ]
})
export class IgisokozoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IgisokozoHomeComponent } from './igisokozo-home/igisokozo-home.component';
import { LevelOneComponent } from './level-one/level-one.component';
import { LevelTwoComponent } from './level-two/level-two.component';
import { LevelThreeComponent } from './level-three/level-three.component';

const routes:Routes=[
  {path: '', component:IgisokozoHomeComponent},
  {path:'level-1', component:LevelOneComponent},
  {path:'level-2', component:LevelTwoComponent},
  {path:'level-3', component:LevelThreeComponent},


]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class IgisokozoRoutingModule { }

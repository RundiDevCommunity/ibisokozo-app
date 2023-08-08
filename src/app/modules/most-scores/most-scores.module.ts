import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostScoresComponent } from './most-scores.component';
import { MostScoresRoutingModule } from './most-scores-routing.module';



@NgModule({
  declarations: [
    MostScoresComponent
  ],
  imports: [
    CommonModule,
    MostScoresRoutingModule
  ]
})
export class MostScoresModule { }

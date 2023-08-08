import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostScoresComponent } from './most-scores.component';
import { MostScoresRoutingModule } from './most-scores-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MostScoresComponent
  ],
  imports: [
    CommonModule,
    MostScoresRoutingModule,
    SharedModule
  ]
})
export class MostScoresModule { }

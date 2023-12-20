import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostScoresComponent } from './most-scores.component';
import { MostScoresRoutingModule } from './most-scores-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [
    MostScoresComponent
  ],
  imports: [
    CommonModule,
    MostScoresRoutingModule,
    SharedModule,
    NgxSkeletonLoaderModule
  ]
})
export class MostScoresModule { }

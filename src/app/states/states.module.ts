import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { DialogState } from './notification';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([DialogState]),

  ]
})
export class StatesModule { }

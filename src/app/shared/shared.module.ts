import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { GoBackComponent } from './go-back/go-back.component';



@NgModule({
  declarations: [
    NotificationComponent,
    GoBackComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NotificationComponent,
    GoBackComponent
  ]
})
export class SharedModule { }

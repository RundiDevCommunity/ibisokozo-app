import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { DialogState } from './notification';
import { AuthState } from './auth/auth.state';
import { NgxsModuleOptions, NoopNgxsExecutionStrategy } from '@ngxs/store';
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([
      DialogState,
      AuthState
    
    ]),

    NgxsStoragePluginModule.forRoot({
      key: [
          'auth',

      ],
  }),
  NgxsResetPluginModule.forRoot(),
  NgxsLoggerPluginModule.forRoot(),

  ]
})
export class StatesModule { }

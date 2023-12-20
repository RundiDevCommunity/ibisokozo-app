import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './modules/layout/layout.module';
import { StatesModule } from './states/states.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { IgisokozoService } from './core/services/igisokozo.service';
import { CoreModule } from './core/core.module';
import { AuthModule } from './modules/auth/auth.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    LayoutModule,
    StatesModule,
    SharedModule,
    HttpClientModule,
    CoreModule,
    NgxSkeletonLoaderModule,
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { SignupComponent } from './modules/auth/signup/signup.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './modules/layout/layout.module';
import { StatesModule } from './states/states.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { IgisokozoService } from './core/services/igisokozo.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    LayoutModule,
    StatesModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    IgisokozoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

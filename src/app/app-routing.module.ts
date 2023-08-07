import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './modules/layout/layout/layout.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { SignupComponent } from './modules/auth/signup/signup.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path: '', 
  component:LayoutComponent,
children:[
  {
    path: '',
    loadChildren: () =>
        import(
            './modules/home/home.module'
        ).then((m) => m.HomeModule),
},
{
  path: 'profile',
  loadChildren: () =>
      import(
          './modules/profile/profile.module'
      ).then((m) => m.ProfileModule),
},
{
  path: 'igisokozo',
  loadChildren: () =>
      import(
          './modules/igisokozo/igisokozo.module'
      ).then((m) => m.IgisokozoModule),
},
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Store } from '@ngxs/store';
import { SetAuthenticated } from './states/auth/auth.state';
// import { OneSignal } from 'onesignal-ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-ibisokozo-app';

  constructor(
    private authService : AuthService,
    private store : Store,
    // private oneSignal: OneSignal
  ){
    //
    // this.oneSignal.init({
    //   appId: "d5fea8af-964d-406f-9bbf-dc51f19850da",
    // });
  }

  ngOnInit(){

  

  }
}

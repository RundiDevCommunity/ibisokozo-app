import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Store } from '@ngxs/store';
import { SetAuthenticated } from './states/auth/auth.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-ibisokozo-app';

  constructor(
    private authService : AuthService,
    private store : Store
  ){
    //
  }

  ngOnInit(){

  

  }
}

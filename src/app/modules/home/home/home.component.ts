import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { OpenDialog } from 'src/app/states/notification';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router:Router, private store: Store){}

  startGame(){
    this.router.navigateByUrl('/igisokozo')
  //   const data = {
  //     title: '',
  //     type: 'success',
  //     message: 'Failed to update agent informations',
  // };
  // this.store.dispatch(new OpenDialog(data));
  }

}

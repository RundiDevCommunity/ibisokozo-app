import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(public location: Location){

  }


  back(){
    this.location.back();
  }
}

import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.scss']
})
export class GoBackComponent {

  
  
    constructor(private location: Location, private router: Router) {}
  
    back() {
      const currentRoute = this.router.url;

  
      if (currentRoute !== '/') {
        this.location.back();
        console.log('Current', currentRoute);
        
      } else {
        console.log('Cannot go back from empty route.');
      }
    }
  
  

}

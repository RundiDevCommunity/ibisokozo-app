import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.scss']
})
export class GoBackComponent {
  showGoBack:boolean = false;
  currentRoute:string ='/'

  ngDoCheck(){
    if(this.currentRoute !== '/'){
      this.showGoBack=true
      console.log('checking');
      

    }
  }
  
    constructor(private location: Location, private router: Router) {}
  
    back() {
      this.currentRoute = this.router.url;

  
      if (this.currentRoute !== '/') {
        this.location.back();
        console.log('show route', this.showGoBack);
        
        console.log('Current', this.currentRoute);
        
      } else {
        console.log('Cannot go back from empty route.');
      }
    }
  
  

}

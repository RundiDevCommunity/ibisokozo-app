import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isMenuShown: boolean = false
  selectedMenu:string='';

  constructor(private router:Router){}


  toggleMenu(){
    this.isMenuShown=!this.isMenuShown
  }

  changeMenu(menu:string){
    this.selectedMenu=menu;
    this.router.navigateByUrl('/'+ menu);
    this.isMenuShown=false
    
  }

}

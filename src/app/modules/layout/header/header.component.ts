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
  favDialog:any;

  constructor(private router:Router){}


  toggleMenu(){
    this.isMenuShown=!this.isMenuShown
  }

  changeMenu(menu:string){
    this.selectedMenu=menu;
    this.router.navigateByUrl('/'+ menu);
    this.isMenuShown=false
    
  }

  logout(){
    this.router.navigateByUrl('/login')
    
  }
//how can i close this modal?
  openModal() {
    // this.modal.show();
    this.favDialog = document.getElementById('favDialog');
    if (this.favDialog) {
        this.favDialog.showModal();
    }
}

closeModal(){
  this.favDialog = document.getElementById('favDialog');
  if (this.favDialog) {
      this.favDialog.close();
  }

}

}

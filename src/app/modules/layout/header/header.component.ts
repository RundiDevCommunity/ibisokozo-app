import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GeneralService } from 'src/app/core/services/general.service';
import { UserService } from 'src/app/core/services/user.service';
import { AuthState, SetAuthenticated } from 'src/app/states/auth/auth.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isMenuShown: boolean = false
  selectedMenu:string='';
  favDialog:any;
  isAuthenticated: boolean = false
  isAuthenticated$:Observable<boolean>
  canGoBack:boolean = false
  

  constructor(
    private router:Router,
    private store : Store,
    private generalService : GeneralService,
    private userService : UserService){

   this.isAuthenticated$= this.store.select(AuthState.isAuthenticated)

  }


  ngOnInit(){

    this.isAuthenticated$.subscribe({
      next:(isAuthenticated:boolean) =>{
        this.isAuthenticated=isAuthenticated
      }
    })

    this.userService.getUserInfo().subscribe()
    this.generalService.canGoBack$.subscribe((back:boolean)=>{
      this.canGoBack=back
    })
  }
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
    this.store.dispatch(new SetAuthenticated(false, null))

    
  }
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

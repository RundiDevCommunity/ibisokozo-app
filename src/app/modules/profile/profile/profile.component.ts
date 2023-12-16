import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AuthState } from 'src/app/states/auth/auth.state';
import { UserService } from 'src/app/core/services/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  editProfile:boolean = false;
  token:any = "";
  token$:Observable<any>
  user:any

  constructor(
    private store : Store,
    private userService : UserService
  ){
    this.token$=this.store.select(AuthState.token)

  }

  ngOnInit(){

    this.token$.subscribe({
  next:(token:any)=>{
    this.token=token

    this.getUserInfo()
  }
    })
  }

  getUserInfo(){

    this.userService.getUserInfo(this.token).subscribe({
      next:(user:any)=>{
        this.user=user.results[0]
      }
    })


  }


  


}

import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Player } from 'src/app/core/model/most-player';
import { UserService } from 'src/app/core/services/user.service';
import { AuthState } from 'src/app/states/auth/auth.state';

@Component({
  selector: 'app-most-scores',
  templateUrl: './most-scores.component.html',
  styleUrls: ['./most-scores.component.scss']
})
export class MostScoresComponent {


  mostPlayers:Player[]=[
    {photoUrl:'../../../assets/images/profile.jpg', name:'Don Delice', score:234},
    {photoUrl:'../../../assets/images/userprofile.png', name:'Yannick', score:312},
    {photoUrl:'../../../assets/images/userprofile.png', name:'John', score:112},



  ]


  isPhotoOpen = false;
  enlargedPhotoUrl: string = '';
  users: any;
  token:any=''
  token$:Observable<string | null>



  constructor(
    private userService : UserService,
    private store:Store

  ){
    this.token$=this.store.select(AuthState.token)
  }

  ngOnInit(){

    this.token$.subscribe(token =>{
      this.token=token

      this.getUsersLists()
    })

  }


  getUsersLists(){
    this.users=undefined

    this.userService.getUsersLists(this.token).subscribe({
      next:(users:any)=>{
        this.users=users.results

        console.log('users', users);
        

      }
    })

  }

  openPhoto(photoUrl: string) {
      this.isPhotoOpen = true;
      this.enlargedPhotoUrl = photoUrl;
  }

  closePhoto() {
      this.isPhotoOpen = false;
      this.enlargedPhotoUrl = '';
  }

  refresh(){
    this.getUsersLists()
  }

}

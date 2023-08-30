import { Component } from '@angular/core';
import { Player } from 'src/app/core/model/most-player';

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

  openPhoto(photoUrl: string) {
      this.isPhotoOpen = true;
      this.enlargedPhotoUrl = photoUrl;
  }

  closePhoto() {
      this.isPhotoOpen = false;
      this.enlargedPhotoUrl = '';
  }

}

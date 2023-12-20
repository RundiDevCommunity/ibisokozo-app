import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IgisokozoService } from 'src/app/core/services/igisokozo.service';
import { UserService } from 'src/app/core/services/user.service';
import { AuthState } from 'src/app/states/auth/auth.state';

@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.component.html',
  styleUrls: ['./level-one.component.scss']
})
export class LevelOneComponent implements OnInit {

  niruze:boolean=false;
  favDialog:any
  isCorrect:boolean=true;
  igisokozo:any;
  goodAnswer:string='';
  hasGivenUp:boolean=false;
  providedAnswer:string='';
  answerDisabled:boolean=false;
  @ViewChild('correctAudioElement', { static: false }) correctAudioElement: ElementRef | any;
  @ViewChild('incorrectAudioElement', { static: false }) incorrectAudioElement: ElementRef |any;
  correctAnswerImageVisible: boolean = false;
  animateImage: boolean = false;
  score:number=0;
  token:string=''
  token$:Observable<any>
  highlightAnswers:boolean=false
  selectedAnswer:string=''
  isAuthenticated$:Observable<boolean>
  isAuthenticated:boolean=false
  isLoading:boolean=false

  


 
  constructor(
    private igisokozoService : IgisokozoService,
    private store : Store,
    private userService : UserService){
   this.token$= this.store.select(AuthState.token)
   this.isAuthenticated$=this.store.select(AuthState.isAuthenticated)

  }

  ngOnInit(){
    this.igisokozoService.getIbisokozo().subscribe()
    this.getIgisokozo()

    this.token$.subscribe(token =>{
      this.token=token
    })

    this.isAuthenticated$.subscribe(isAuthenticated =>{
      this.isAuthenticated=isAuthenticated

      if(isAuthenticated){
      this.getScore()

      }
    })




  }
  getIgisokozo(){
    this.isLoading=true
    this.highlightAnswers=false
    this.answerDisabled=false

    this.igisokozoService.getIbisokozo().subscribe({
      next:(igisokozo:any)=>{
        this.isLoading=false
        this.igisokozo=igisokozo
      }
    })

    

  }

  getScore(){
    this.userService.getScore(this.token).subscribe((score:any)=>{
      this.score = score.results[0].score
    })

  }
  checkAnswer(item: any) {
    this.highlightAnswers=true
    this.answerDisabled=true
    this.selectedAnswer=item


    if(this.isAuthenticated){

      this.igisokozoService.checkAnswer(item, this.token).subscribe((answer:any) =>{

        if(answer.correct){
          this.isCorrect=true
          this.playCorrectAudio()

        }else{
          this.playIncorrectAudio()
        }
        console.log(this.isAuthenticated);
      this.getScore()  


    console.log('aaa', item, this.igisokozo.inyishu.inyishu);
      
      })

      }else{
        if(item == this.igisokozo.inyishu.inyishu){
          this.score+=1
          console.log('scc');
          this.isCorrect=true
          this.playCorrectAudio()
          
        }else{
          this.isCorrect=false
          this.playIncorrectAudio()
        }
      }

  }



playCorrectAudio() {
  const audio: HTMLAudioElement = this.correctAudioElement.nativeElement;
  audio.play();

  this.correctAnswerImageVisible = true;
  this.animateImage=true

  setTimeout(() => {
    this.correctAnswerImageVisible = false;
    this.animateImage=false
  }, 1000);
}

playIncorrectAudio() {
  const audio: HTMLAudioElement = this.incorrectAudioElement.nativeElement;
  audio.play();
}

}

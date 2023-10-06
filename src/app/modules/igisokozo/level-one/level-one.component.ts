import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IgisokozoService } from 'src/app/core/services/igisokozo.service';

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
  score:number=0


  ibisokozo=[
    {
      igisokozo:'Kararengera', 
      answers:[
        {answer:"Agahanga k'imbwa", isCorrect:false},
        {answer:"Amabere y'imbwa", isCorrect:false},
        {answer:"Akana kaj'iwabo", isCorrect:false},
        {answer:"Akotsi k'abungere", isCorrect:true},


      ]
    },
    {
      igisokozo:'Gira so katamobwa', 
      answers:[
        {answer:"Ubuhanza", isCorrect:false},
        {answer:"Agahanga k'imbwa", isCorrect:true},
        {answer:"Umutwe w'inka", isCorrect:false},
        {answer:"Ukuguru", isCorrect:false},


      ]
    },
    {
      igisokozo:'Ane meza', 
      answers:[
        {answer:"Amaguru y'inka", isCorrect:false},
        {answer:"Amenyo y'imbere", isCorrect:false},
        {answer:"Amabere y'inka", isCorrect:true},
        {answer:"Amapine y'imodoka", isCorrect:false},


      ]
    },
    {
      igisokozo:'Karasimvye miheneko', 
      answers:[
        {answer:"Akana gasimvye uruzi", isCorrect:false},
        {answer:"Imbwa isimvye urugo", isCorrect:false},
        {answer:"Agahene gasimvye urugo", isCorrect:false},
        {answer:"Agahene gasimvye umugazo", isCorrect:true},


      ]
    },
    {
      igisokozo:'Aho hepfo haciye ivyiza bisa', 
      answers:[
        {answer:"Abana b'amahasa", isCorrect:false},
        {answer:"Inka n'umugabo", isCorrect:false},
        {answer:"Umuzungu mumodoka", isCorrect:false},
        {answer:"Umuzungu kw'ipikipiki", isCorrect:true},


      ]
    },
    {
      igisokozo:'Aho hepfo haciye ingoma itavuga', 
      answers:[
        {answer:"Umugore afise inda", isCorrect:true},
        {answer:"Ingoma yatobotse", isCorrect:false},
        {answer:"Ingoma y'igisharizo", isCorrect:false},
        {answer:"Inka ihaze", isCorrect:false},


      ]
    },
    {
      igisokozo:'Icutabonye', 
      answers:[
        {answer:"Ivuka ryawe", isCorrect:false},
        {answer:"Umwungu womurubibe", isCorrect:false},
        {answer:"Ubugeni bwaso na nyoko", isCorrect:true},
        {answer:"Akari munda y'ingoma", isCorrect:false},


      ]
    },
     {
      igisokozo:'Abatama bakera baca imanza bunamye', 
      answers:[
        {answer:"Umugabo yicisha bugufi", isCorrect:false},
        {answer:"Imigondoro y'ibiharage", isCorrect:true},
        {answer:"Igiti kigoramye", isCorrect:false},
        {answer:"Intama", isCorrect:false},


      ]
    },
     {
      igisokozo:'Abatama bakera baca imanza bunamye', 
      answers:[
        {answer:"Umugabo yicisha bugufi", isCorrect:false},
        {answer:"Imigondoro y'ibiharage", isCorrect:true},
        {answer:"Igiti kigoramye", isCorrect:false},
        {answer:"Intama", isCorrect:false},


      ]
    },
    {
      igisokozo:'Ndakibona singifata', 
      answers:[
        {answer:"Inzahabu", isCorrect:false},
        {answer:"Igitutu", isCorrect:true},
        {answer:"Icontari buronke", isCorrect:false},
        {answer:"Umuyaga", isCorrect:false},


      ]
    },
    {
      igisokozo:'Umwana wanje yokunesha ari muto', 
      answers:[
        {answer:"Ivubi", isCorrect:false},
        {answer:"Akanyegeri", isCorrect:false},
        {answer:"Ifundi", isCorrect:false},
        {answer:"Uruyuki", isCorrect:true},


      ]
    },
    {
      igisokozo:'Abana banje bakubita ibiganza hirya no hino', 
      answers:[
        {answer:"Intoke", isCorrect:false},
        {answer:"Abatamvyi", isCorrect:false},
        {answer:"Inzuzi", isCorrect:true},
        {answer:"Amashami y'igiti", isCorrect:false},


      ]
    },
    {
      igisokozo:'Abana banje bakubita ibiganza hirya no hino', 
      answers:[
        {answer:"Intoke", isCorrect:false},
        {answer:"Abatamvyi", isCorrect:false},
        {answer:"Inzuzi", isCorrect:true},
        {answer:"Amashami y'igiti", isCorrect:false},


      ]
    },
     {
      igisokozo:'Uhmmm', 
      answers:[
        {answer:"Igikamiwe make", isCorrect:true},
        {answer:"Inzoka munda", isCorrect:false},
        {answer:"Umugabo yemeye atemeye", isCorrect:false},
        {answer:"Ikidumu kigaragara", isCorrect:false},


      ]
    },
       {
      igisokozo:'Aha twese turaririye umwe', 
      answers:[
        {answer:"Umuvyeyi wacu", isCorrect:false},
        {answer:"Inkono kuziko", isCorrect:true},
        {answer:"Umwami", isCorrect:false},
        {answer:"Ingabo z'umukuru w'igihugu", isCorrect:false},


      ]
    },
           {
      igisokozo:"Wigera mubarembe war'umurembe ?", 
      answers:[
        {answer:"Umuzungu mubirabure", isCorrect:false},
        {answer:"Inka yera muzirabura", isCorrect:false},
        {answer:"Impene muntama", isCorrect:true},
        {answer:"Intama munka", isCorrect:false},


      ]
    },
         {
      igisokozo:"Abo kwa Ruringaniza bambariye imiringa mu kuzimu.", 
      answers:[
        {answer:"Ibijumbu", isCorrect:true},
        {answer:"Imfuku", isCorrect:false},
        {answer:"Imyumbati", isCorrect:false},
        {answer:"Iyo hasi", isCorrect:false},


      ]
    },
      {
      igisokozo:"Karahinda iduri", 
      answers:[
        {answer:"Akana gakubiswe", isCorrect:false},
        {answer:"Akato mumpange", isCorrect:true},
        {answer:"Inanga", isCorrect:false},
        {answer:"Uruhwa", isCorrect:false},


      ]
    },
      {
      igisokozo:"Urabona ngo bitugu vya sogokuru ansimbira urugo!", 
      answers:[
        {answer:"Umugabo asumba urugo", isCorrect:false},
        {answer:"Umwana asumba se", isCorrect:false},
        {answer:"Ikivumvuri", isCorrect:true},
        {answer:"Igifyera", isCorrect:false},


      ]
    },
    

    
  ]

  constructor(private igisokozoService : IgisokozoService){}

  ngOnInit(){
    this.igisokozoService.getIbisokozo().subscribe()
    this.getIgisokozo()
  }
  getIgisokozo(){
    this.answerDisabled=false
    for(let i=0; i<this.ibisokozo.length; i++){
      this.igisokozo=this.ibisokozo[Math.floor(Math.random() * this.ibisokozo.length)]

      console.log(this.ibisokozo.length)
    this.closeModal();

    }

    
    this.hasGivenUp=false
    

  }
  checkAnswer(item: any) {
    this.openModal();
    this.isCorrect = item.isCorrect;
    this.providedAnswer=item.answer

    if (this.isCorrect) {
      this.playCorrectAudio(); 
      this.score++
    } else {
      this.playIncorrectAudio(); 
    }
    
      
  
  }

getIgisokozo2(){
  for(let i=0; i<this.ibisokozo.length; i++){
    this.igisokozo=this.ibisokozo[Math.floor(Math.random() * this.ibisokozo.length)]
  this.closeModal();

  }

}

  

  giveUp(){
    this.closeModal()
    this.hasGivenUp=true
    if(this.hasGivenUp){
      const correctAnswer = this.igisokozo.answers.find((answer:any) => answer.isCorrect);
    
      this.goodAnswer = correctAnswer.answer;

    }
    this.answerDisabled=true

  }
  openModal() {
    // this.modal.show();
    this.favDialog = document.getElementById('myDialog');
    if (this.favDialog) {
        this.favDialog.showModal();

    }
}

closeModal(){
  this.favDialog = document.getElementById('myDialog');
  if (this.favDialog) {
      this.favDialog.close();
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

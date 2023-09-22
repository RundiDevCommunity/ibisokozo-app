import { Component, ElementRef, ViewChild } from '@angular/core';
import { IgisokozoService } from 'src/app/core/services/igisokozo.service';

@Component({
  selector: 'app-igisokozo',
  templateUrl: './igisokozo.component.html',
  styleUrls: ['./igisokozo.component.scss']
})
export class IgisokozoComponent {

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
        {answer:"Akana kaj'iwabo", isCorrect:true},
        {answer:"Akotsi k'abungere", isCorrect:false},


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

/**
 Certainly, I can help you understand these two links and what they typically represent in the context of a game application development.

1. **https://ibisokozo.ksquad.dev/rest_api/**
   - This URL appears to be the endpoint for a RESTful API. REST (Representational State Transfer) is a common architectural style for designing networked applications. In the context of your game application, a REST API is likely used for communication between the frontend (what the user interacts with) and the backend (the server that processes requests and manages data).

   - REST APIs use standard HTTP methods (GET, POST, PUT, DELETE) to perform CRUD (Create, Read, Update, Delete) operations on resources. These resources could be various game-related data like player profiles, game scores, or in-game items. When the frontend sends a request to this URL, it's likely trying to retrieve or manipulate some data related to the game.

2. **https://ibisokozo.ksquad.dev/graphql_api/**
   - This URL appears to be the endpoint for a GraphQL API. GraphQL is another way to design APIs, and it offers more flexibility compared to REST. In a GraphQL API, clients can request exactly the data they need, and the server responds with a JSON object containing that data.

   - GraphQL allows clients (such as your frontend) to specify the structure of the response they want, which can help reduce over-fetching or under-fetching of data. This can be especially useful in complex applications like games, where different parts of the game might need different sets of data.

In summary, these two URLs likely represent different ways that your game application communicates with the backend server. The REST API follows a more traditional approach with predefined endpoints for specific actions, while the GraphQL API provides more flexibility in data retrieval by allowing clients to request exactly what they need. Depending on the requirements of your game, you might use one or both of these APIs to handle various aspects of data exchange between the frontend and backend.
 */

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

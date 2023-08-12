import { Component } from '@angular/core';

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
    }
  ]

  ngOnInit(){
    this.getIgisokozo()
  }
  getIgisokozo(){
    this.answerDisabled=false
    for(let i=0; i<this.ibisokozo.length; i++){
      this.igisokozo=this.ibisokozo[Math.floor(Math.random() * this.ibisokozo.length)]
    }


    this.closeModal();
    
    this.hasGivenUp=false
    

  }
  checkAnswer(item: any) {
    this.openModal();
    this.isCorrect = item.isCorrect;
    this.providedAnswer=item.answer
      
  
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


}

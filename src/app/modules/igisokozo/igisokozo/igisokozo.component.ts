import { Component } from '@angular/core';

@Component({
  selector: 'app-igisokozo',
  templateUrl: './igisokozo.component.html',
  styleUrls: ['./igisokozo.component.scss']
})
export class IgisokozoComponent {

  niruze:boolean=false;
  favDialog:any
  isCorrect:boolean=true

  igisokozo=[]

  getIgisokozo(){

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

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level-three',
  templateUrl: './level-three.component.html',
  styleUrls: ['./level-three.component.scss']
})
export class LevelThreeComponent implements OnInit {

  constructor(
    private _location:Location
  ) { }

  ngOnInit() {
  }

  goBack(){
    this._location.back()
  }

}

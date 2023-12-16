import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level-two',
  templateUrl: './level-two.component.html',
  styleUrls: ['./level-two.component.scss']
})
export class LevelTwoComponent implements OnInit {

  constructor(
    private _location:Location
  ) { }

  ngOnInit() {
  }

  goBack(){
    this._location.back()
  }

}

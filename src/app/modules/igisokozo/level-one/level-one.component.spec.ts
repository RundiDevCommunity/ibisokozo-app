/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LevelOneComponent } from './level-one.component';

describe('LevelOneComponent', () => {
  let component: LevelOneComponent;
  let fixture: ComponentFixture<LevelOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostScoresComponent } from './most-scores.component';

describe('MostScoresComponent', () => {
  let component: MostScoresComponent;
  let fixture: ComponentFixture<MostScoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostScoresComponent]
    });
    fixture = TestBed.createComponent(MostScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

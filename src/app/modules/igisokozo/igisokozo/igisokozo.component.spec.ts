import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgisokozoComponent } from './igisokozo.component';

describe('IgisokozoComponent', () => {
  let component: IgisokozoComponent;
  let fixture: ComponentFixture<IgisokozoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IgisokozoComponent]
    });
    fixture = TestBed.createComponent(IgisokozoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

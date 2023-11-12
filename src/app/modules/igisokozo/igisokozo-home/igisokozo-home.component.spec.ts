import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IgisokozoHomeComponent } from './igisokozo-home.component';

describe('IgisokozoComponent', () => {
  let component: IgisokozoHomeComponent;
  let fixture: ComponentFixture<IgisokozoHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IgisokozoHomeComponent]
    });
    fixture = TestBed.createComponent(IgisokozoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

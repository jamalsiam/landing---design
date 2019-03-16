import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNotRegisterComponent } from './card-not-register.component';

describe('CardNotRegisterComponent', () => {
  let component: CardNotRegisterComponent;
  let fixture: ComponentFixture<CardNotRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNotRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNotRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

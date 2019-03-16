import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CousreContentComponent } from './cousre-content.component';

describe('CousreContentComponent', () => {
  let component: CousreContentComponent;
  let fixture: ComponentFixture<CousreContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CousreContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CousreContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

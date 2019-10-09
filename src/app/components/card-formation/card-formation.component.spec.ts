import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormationComponent } from './card-formation.component';

describe('CardFormationComponent', () => {
  let component: CardFormationComponent;
  let fixture: ComponentFixture<CardFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
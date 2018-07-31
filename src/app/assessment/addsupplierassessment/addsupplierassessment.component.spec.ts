import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsupplierassessmentComponent } from './addsupplierassessment.component';

describe('AddsupplierassessmentComponent', () => {
  let component: AddsupplierassessmentComponent;
  let fixture: ComponentFixture<AddsupplierassessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsupplierassessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsupplierassessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentdetailsComponent } from './assessmentdetails.component';

describe('AssessmentdetailsComponent', () => {
  let component: AssessmentdetailsComponent;
  let fixture: ComponentFixture<AssessmentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssessmentdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

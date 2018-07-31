import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierassessmentdetailsComponent } from './supplierassessmentdetails.component';

describe('SupplierassessmentdetailsComponent', () => {
  let component: SupplierassessmentdetailsComponent;
  let fixture: ComponentFixture<SupplierassessmentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierassessmentdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierassessmentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPropertyPricingPlanComponent } from './post-property-pricing-plan.component';

describe('PostPropertyPricingPlanComponent', () => {
  let component: PostPropertyPricingPlanComponent;
  let fixture: ComponentFixture<PostPropertyPricingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPropertyPricingPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPropertyPricingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

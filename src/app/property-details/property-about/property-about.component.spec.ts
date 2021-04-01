import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyAboutComponent } from './property-about.component';

describe('PropertyAboutComponent', () => {
  let component: PropertyAboutComponent;
  let fixture: ComponentFixture<PropertyAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

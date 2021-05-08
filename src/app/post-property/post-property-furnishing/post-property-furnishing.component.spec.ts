import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPropertyFurnishingComponent } from './post-property-furnishing.component';

describe('PostPropertyFurnishingComponent', () => {
  let component: PostPropertyFurnishingComponent;
  let fixture: ComponentFixture<PostPropertyFurnishingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPropertyFurnishingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPropertyFurnishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

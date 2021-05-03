import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPropertyRentComponent } from './post-property-rent.component';

describe('PostPropertyRentComponent', () => {
  let component: PostPropertyRentComponent;
  let fixture: ComponentFixture<PostPropertyRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPropertyRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPropertyRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

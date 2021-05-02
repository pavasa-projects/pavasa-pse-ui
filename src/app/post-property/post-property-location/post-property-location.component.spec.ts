import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPropertyLocationComponent } from './post-property-location.component';

describe('PostPropertyLocationComponent', () => {
  let component: PostPropertyLocationComponent;
  let fixture: ComponentFixture<PostPropertyLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPropertyLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPropertyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

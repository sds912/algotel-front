import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopCarouselComponent } from './home-top-carousel.component';

describe('HomeTopCarouselComponent', () => {
  let component: HomeTopCarouselComponent;
  let fixture: ComponentFixture<HomeTopCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeTopCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTopCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

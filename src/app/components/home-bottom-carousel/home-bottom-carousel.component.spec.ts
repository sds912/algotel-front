import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBottomCarouselComponent } from './home-bottom-carousel.component';

describe('HomeBottomCarouselComponent', () => {
  let component: HomeBottomCarouselComponent;
  let fixture: ComponentFixture<HomeBottomCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBottomCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBottomCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyImgSliderComponent } from './my-img-slider.component';

describe('MyImgSliderComponent', () => {
  let component: MyImgSliderComponent;
  let fixture: ComponentFixture<MyImgSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyImgSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyImgSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultResultsComponent } from './default-results.component';

describe('DefaultResultsComponent', () => {
  let component: DefaultResultsComponent;
  let fixture: ComponentFixture<DefaultResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

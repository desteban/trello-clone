import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivitySlider } from './productivity-slider';

describe('ProductivitySlider', () => {
  let component: ProductivitySlider;
  let fixture: ComponentFixture<ProductivitySlider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductivitySlider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductivitySlider);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenLayout } from './screen-layout';

describe('ScreenLayout', () => {
  let component: ScreenLayout;
  let fixture: ComponentFixture<ScreenLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScreenLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreCards } from './more-cards';

describe('MoreCards', () => {
  let component: MoreCards;
  let fixture: ComponentFixture<MoreCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreCards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

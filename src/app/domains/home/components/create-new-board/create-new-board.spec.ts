import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewBoard } from './create-new-board';

describe('CreateNewBoard', () => {
  let component: CreateNewBoard;
  let fixture: ComponentFixture<CreateNewBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

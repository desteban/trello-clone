import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBoards } from './item-boards';

describe('ItemBoards', () => {
  let component: ItemBoards;
  let fixture: ComponentFixture<ItemBoards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemBoards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemBoards);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

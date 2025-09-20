import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropItem } from './drag-drop-item';

describe('DragDropItem', () => {
  let component: DragDropItem;
  let fixture: ComponentFixture<DragDropItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragDropItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragDropItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropContainer } from './drag-drop-container';

describe('DragDropContainer', () => {
  let component: DragDropContainer;
  let fixture: ComponentFixture<DragDropContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragDropContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragDropContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

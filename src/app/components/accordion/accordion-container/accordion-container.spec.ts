import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionContainer } from './accordion-container';

describe('AccordionContainer', () => {
  let component: AccordionContainer;
  let fixture: ComponentFixture<AccordionContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

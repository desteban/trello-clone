import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeMenu } from './theme-menu';

describe('ThemeMenu', () => {
  let component: ThemeMenu;
  let fixture: ComponentFixture<ThemeMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landscape } from './landscape';

describe('Landscape', () => {
  let component: Landscape;
  let fixture: ComponentFixture<Landscape>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Landscape]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landscape);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Discovery } from './discovery';

describe('Discovery', () => {
  let component: Discovery;
  let fixture: ComponentFixture<Discovery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Discovery],
    }).compileComponents();

    fixture = TestBed.createComponent(Discovery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

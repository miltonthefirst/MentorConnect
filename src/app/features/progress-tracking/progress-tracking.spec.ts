import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressTracking } from './progress-tracking';

describe('ProgressTracking', () => {
  let component: ProgressTracking;
  let fixture: ComponentFixture<ProgressTracking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressTracking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressTracking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { signal } from '@angular/core';
import { MentorDashboardPage } from './mentor-dashboard-page';
import { AuthService } from 'auth';

class AuthServiceStub {
  readonly user = signal(null);

  logout(): Promise<void> {
    return Promise.resolve();
  }
}

describe('MentorDashboardPage', () => {
  let component: MentorDashboardPage;
  let fixture: ComponentFixture<MentorDashboardPage>;
  let routerStub: { navigate: (commands: string[]) => Promise<boolean> };

  beforeEach(async () => {
    routerStub = {
      navigate: async () => true,
    };

    await TestBed.configureTestingModule({
      imports: [MentorDashboardPage],
      providers: [
        { provide: AuthService, useClass: AuthServiceStub },
        { provide: Router, useValue: routerStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MentorDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { signal } from '@angular/core';
import { AdminDashboardPage } from './admin-dashboard-page';
import { AuthService } from 'auth';

class AuthServiceStub {
  readonly user = signal(null);

  logout(): Promise<void> {
    return Promise.resolve();
  }
}

describe('AdminDashboardPage', () => {
  let component: AdminDashboardPage;
  let fixture: ComponentFixture<AdminDashboardPage>;
  let routerStub: { navigate: (commands: string[]) => Promise<boolean> };

  beforeEach(async () => {
    routerStub = {
      navigate: async () => true,
    };

    await TestBed.configureTestingModule({
      imports: [AdminDashboardPage],
      providers: [
        { provide: AuthService, useClass: AuthServiceStub },
        { provide: Router, useValue: routerStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

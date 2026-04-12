import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { signal } from '@angular/core';
import { MenteeDashboardPage } from './mentee-dashboard-page';
import { AuthService } from 'auth';

class AuthServiceStub {
  readonly user = signal(null);

  logout(): Promise<void> {
    return Promise.resolve();
  }
}

describe('MenteeDashboardPage', () => {
  let component: MenteeDashboardPage;
  let fixture: ComponentFixture<MenteeDashboardPage>;
  let routerStub: { navigate: (commands: string[]) => Promise<boolean> };

  beforeEach(async () => {
    routerStub = {
      navigate: async () => true,
    };

    await TestBed.configureTestingModule({
      imports: [MenteeDashboardPage],
      providers: [
        { provide: AuthService, useClass: AuthServiceStub },
        { provide: Router, useValue: routerStub },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MenteeDashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

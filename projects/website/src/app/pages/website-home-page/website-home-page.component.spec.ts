import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebsiteHomePage } from './website-home-page.component';
import { provideRouter } from '@angular/router';

describe('WebsiteHomePage', () => {
  let component: WebsiteHomePage;
  let fixture: ComponentFixture<WebsiteHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteHomePage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(WebsiteHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

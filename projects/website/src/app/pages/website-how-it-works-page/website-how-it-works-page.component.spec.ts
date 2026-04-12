import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebsiteHowItWorksPage } from './website-how-it-works-page.component';
import { provideRouter } from '@angular/router';

describe('WebsiteHowItWorksPage', () => {
  let component: WebsiteHowItWorksPage;
  let fixture: ComponentFixture<WebsiteHowItWorksPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteHowItWorksPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(WebsiteHowItWorksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

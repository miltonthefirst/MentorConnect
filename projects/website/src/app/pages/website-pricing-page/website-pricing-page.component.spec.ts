import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebsitePricingPage } from './website-pricing-page.component';
import { provideRouter } from '@angular/router';

describe('WebsitePricingPage', () => {
  let component: WebsitePricingPage;
  let fixture: ComponentFixture<WebsitePricingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsitePricingPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(WebsitePricingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

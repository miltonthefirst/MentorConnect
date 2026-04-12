import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebsiteAboutPage } from './website-about-page.component';
import { provideRouter } from '@angular/router';

describe('WebsiteAboutPage', () => {
  let component: WebsiteAboutPage;
  let fixture: ComponentFixture<WebsiteAboutPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteAboutPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(WebsiteAboutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

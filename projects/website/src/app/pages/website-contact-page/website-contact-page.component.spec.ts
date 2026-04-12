import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WebsiteContactPage } from './website-contact-page.component';
import { provideRouter } from '@angular/router';

describe('WebsiteContactPage', () => {
  let component: WebsiteContactPage;
  let fixture: ComponentFixture<WebsiteContactPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteContactPage],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(WebsiteContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

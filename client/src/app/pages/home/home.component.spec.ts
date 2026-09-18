import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterLink } from '@angular/router';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, RouterLink],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render hero section', () => {
    const heroSection = fixture.nativeElement.querySelector('.hero-section');
    expect(heroSection).toBeTruthy();
  });

  it('should display profile image', () => {
    const profileImg = fixture.nativeElement.querySelector('.profile-img');
    expect(profileImg).toBeTruthy();
    expect(profileImg.src).toContain('profile.png');
  });

  it('should display welcome title', () => {
    const title = fixture.nativeElement.querySelector('.hero-title');
    expect(title.textContent).toContain('Welcome to My World');
  });

  it('should have read more button with correct route', () => {
    const button = fixture.nativeElement.querySelector('.btn-read-more');
    expect(button).toBeTruthy();
    expect(button.getAttribute('routerLink')).toBe('/about');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent, RouterLink, RouterLinkActive],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display navbar', () => {
    const navbar = fixture.nativeElement.querySelector('.navbar-custom');
    expect(navbar).toBeTruthy();
  });

  it('should display logo', () => {
    const logo = fixture.nativeElement.querySelector('.logo-link');
    expect(logo).toBeTruthy();
    expect(logo.textContent).toContain('Simamkele Tancu');
  });

  it('should display navigation links', () => {
    const links = fixture.nativeElement.querySelectorAll('.navbar-links a');
    expect(links.length).toBeGreaterThan(0);
  });

  it('should have correct router links', () => {
    const aboutLink = fixture.nativeElement.querySelector('a[routerLink="/about"]');
    expect(aboutLink).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display about section', () => {
    const section = fixture.nativeElement.querySelector('.about-section');
    expect(section).toBeTruthy();
  });

  it('should display page title', () => {
    const title = fixture.nativeElement.querySelector('.page-title');
    expect(title.textContent).toContain('About Me');
  });

  it('should display skills grid', () => {
    const skillsGrid = fixture.nativeElement.querySelector('.skills-grid');
    expect(skillsGrid).toBeTruthy();
  });

  it('should display all skill categories', () => {
    const skillCategories = fixture.nativeElement.querySelectorAll('.skill-category');
    expect(skillCategories.length).toBeGreaterThan(0);
  });
});

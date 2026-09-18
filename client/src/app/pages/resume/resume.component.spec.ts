import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeComponent } from './resume.component';
import { CommonModule } from '@angular/common';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeComponent, CommonModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display resume section', () => {
    const section = fixture.nativeElement.querySelector('.resume-section');
    expect(section).toBeTruthy();
  });

  it('should display page title', () => {
    const title = fixture.nativeElement.querySelector('.page-title');
    expect(title.textContent).toContain('Education & Experience');
  });

  it('should display timeline container', () => {
    const container = fixture.nativeElement.querySelector('.timeline-container');
    expect(container).toBeTruthy();
  });

  it('should display education and experience sections', () => {
    const sections = fixture.nativeElement.querySelectorAll('.section-title');
    expect(sections.length).toBeGreaterThanOrEqual(2);
  });

  it('should display timeline items', () => {
    const items = fixture.nativeElement.querySelectorAll('.timeline-item');
    expect(items.length).toBeGreaterThan(0);
  });
});

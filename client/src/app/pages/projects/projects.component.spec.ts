import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let apiService: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['getProjects']);

    await TestBed.configureTestingModule({
      imports: [ProjectsComponent, CommonModule],
      providers: [{ provide: ApiService, useValue: apiServiceSpy }],
    }).compileComponents();

    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display projects section', () => {
    fixture.detectChanges();
    const section = fixture.nativeElement.querySelector('.projects-section');
    expect(section).toBeTruthy();
  });

  it('should display page title', () => {
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.page-title');
    expect(title.textContent).toContain('Projects');
  });

  it('should display project cards', () => {
    fixture.detectChanges();
    const cards = fixture.nativeElement.querySelectorAll('.project-card');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('should display projects grid', () => {
    fixture.detectChanges();
    const grid = fixture.nativeElement.querySelector('.projects-grid');
    expect(grid).toBeTruthy();
  });
});

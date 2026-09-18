import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestimonialsComponent } from './testimonials.component';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

describe('TestimonialsComponent', () => {
  let component: TestimonialsComponent;
  let fixture: ComponentFixture<TestimonialsComponent>;
  let apiService: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['getTestimonials']);

    await TestBed.configureTestingModule({
      imports: [TestimonialsComponent, CommonModule],
      providers: [{ provide: ApiService, useValue: apiServiceSpy }],
    }).compileComponents();

    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    fixture = TestBed.createComponent(TestimonialsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display testimonials section', () => {
    fixture.detectChanges();
    const section = fixture.nativeElement.querySelector('.testimonials-section');
    expect(section).toBeTruthy();
  });

  it('should display page title', () => {
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.page-title');
    expect(title.textContent).toContain('Testimonials & References');
  });

  it('should display testimonial cards', () => {
    fixture.detectChanges();
    const cards = fixture.nativeElement.querySelectorAll('.testimonial-card');
    expect(cards.length).toBeGreaterThan(0);
  });

  it('should calculate star ratings', () => {
    const stars = component.getStars(5);
    expect(stars.length).toBe(5);
  });
});

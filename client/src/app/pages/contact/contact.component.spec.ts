import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { ApiService } from '../../services/api.service';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let apiService: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['submitContact']);

    await TestBed.configureTestingModule({
      imports: [ContactComponent, ReactiveFormsModule],
      providers: [{ provide: ApiService, useValue: apiServiceSpy }],
    }).compileComponents();

    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display contact section', () => {
    const section = fixture.nativeElement.querySelector('.contact-section');
    expect(section).toBeTruthy();
  });

  it('should display form', () => {
    const form = fixture.nativeElement.querySelector('.contact-form');
    expect(form).toBeTruthy();
  });

  it('should display page title', () => {
    const title = fixture.nativeElement.querySelector('.page-title');
    expect(title.textContent).toContain('Get In Touch');
  });

  it('should have required form fields', () => {
    const nameField = component.contactForm.get('name');
    expect(nameField?.hasError('required')).toBeTruthy();
  });
});

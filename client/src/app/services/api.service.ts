import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  _id?: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  featured: boolean;
  createdAt?: Date;
}

export interface Testimonial {
  _id?: string;
  name: string;
  title: string;
  company: string;
  message: string;
  image: string;
  rating: number;
  createdAt?: Date;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) { }

  // Projects
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/projects`);
  }

  getProject(id: string): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/projects/${id}`);
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${this.apiUrl}/projects`, project);
  }

  // Testimonials
  getTestimonials(): Observable<Testimonial[]> {
    return this.http.get<Testimonial[]>(`${this.apiUrl}/testimonials`);
  }

  getTestimonial(id: string): Observable<Testimonial> {
    return this.http.get<Testimonial>(`${this.apiUrl}/testimonials/${id}`);
  }

  createTestimonial(testimonial: Testimonial): Observable<Testimonial> {
    return this.http.post<Testimonial>(`${this.apiUrl}/testimonials`, testimonial);
  }

  // Contact
  submitContact(contact: ContactSubmission): Observable<any> {
    return this.http.post(`${this.apiUrl}/contact`, contact);
  }

  // Health check
  healthCheck(): Observable<any> {
    return this.http.get(`${this.apiUrl}/health`);
  }
}

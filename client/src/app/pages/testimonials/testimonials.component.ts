import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, Testimonial } from '../../services/api.service';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [
    {
      _id: '1',
      name: "Siyamthanda Tsobo",
      title: "Full-Stack Developer",
      company: "Life Choices Academy",
      message: "Simamkele is a bright student, very enthusiastic about his work and those around him. Furthermore, Simamkele's positive attitude and excellent interpersonal skills make him a valuable team member who fosters a collaborative and productive work environment. Simamkele Tancu is undoubtedly a highly capable and driven individual, and I have no doubt that they will excel in any endeavor they pursue.",
      image: "https://static.wixstatic.com/media/f0059a_bb43172022964bc69257aaa28a4da724~mv2.jpg/v1/crop/x_23,y_0,w_914,h_1280/fill/w_394,h_552,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/siya.jpg",
      rating: 5
    }
  ];
  loading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  getStars(rating: number): number[] {
    return Array(rating).fill(0).map((_, i) => i);
  }
}

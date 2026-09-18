import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  imports: [RouterOutlet, NavbarComponent, CommonModule],
  selector: 'app-root',
  styles: [`
    .footer-wrapper {
      background-color: #1a1a1a;
      color: #fff;
      padding: 30px 0;
      margin-top: 80px;
    }

    .footer-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 40px;
      flex-wrap: wrap;
      width: 100%;
    }

    .footer-item {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.9rem;
    }

    .footer-item label {
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #fff;
    }

    .footer-item p {
      color: #bbb;
      margin: 0;
    }

    .divider {
      width: 1px;
      height: 30px;
      background-color: #333;
    }

    .footer-social {
      display: flex;
      gap: 15px;
      align-items: center;
    }

    .social-icon {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #fff;
      border-radius: 50%;
      color: #fff;
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 1rem;
    }

    .social-icon:hover {
      background-color: #fff;
      color: #1a1a1a;
    }

    .cv-download-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 10px 20px;
      background-color: transparent;
      color: #fff;
      text-decoration: none;
      font-weight: 700;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      border: 2px solid #fff;
      border-radius: 4px;
      transition: all 0.3s ease;
      white-space: nowrap;
    }

    .cv-download-btn:hover {
      background-color: #fff;
      color: #1a1a1a;
      transform: translateY(-2px);
    }

    .cv-download-btn i {
      font-size: 0.9rem;
    }

    .footer-copyright {
      text-align: center;
      font-size: 0.8rem;
      color: #666;
      margin-top: 20px;
      border-top: 1px solid #333;
      padding-top: 20px;
    }

    @media (max-width: 1024px) {
      .footer-content {
        gap: 25px;
      }

      .footer-item {
        font-size: 0.85rem;
      }

      .social-icon {
        width: 35px;
        height: 35px;
        font-size: 0.9rem;
      }

      .divider {
        height: 25px;
      }
    }

    @media (max-width: 768px) {
      .footer-content {
        gap: 15px;
        padding: 0 20px;
      }

      .footer-item {
        font-size: 0.75rem;
      }

      .footer-item label {
        display: none;
      }

      .divider {
        display: none;
      }

      .social-icon {
        width: 35px;
        height: 35px;
        font-size: 0.8rem;
      }

      .cv-download-btn {
        padding: 8px 15px;
        font-size: 0.7rem;
      }
    }
  `],
  template: `
    <app-navbar></app-navbar>
    <main class="min-vh-100">
      <router-outlet />
    </main>
    <footer class="footer-wrapper">
      <div class="container">
        <div class="footer-content">
          <div class="footer-item">
            <label>Location:</label>
            <p>Cape Town, Western Cape</p>
          </div>

          <div class="divider"></div>

          <div class="footer-item">
            <label>Phone:</label>
            <p>0656013640</p>
          </div>

          <div class="divider"></div>

          <div class="footer-item">
            <label>Email:</label>
            <p>princetancu06@gmail.com</p>
          </div>

          <div class="divider"></div>

          <div class="footer-social">
            <a href="https://github.com/Simamkele20" target="_blank" class="social-icon" title="GitHub">
              <i class="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/simamkele-tancu/" target="_blank" class="social-icon" title="LinkedIn">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>

          <a href="/cv.pdf" download="Simamkele_Tancu_CV.pdf" class="cv-download-btn">
            <i class="bi bi-download"></i> CV
          </a>

          <div class="divider"></div>

          <p style="font-size: 0.8rem; color: #666; margin: 0;">© {{ currentYear }} Simamkele Tancu</p>
        </div>
      </div>
    </footer>
  `,
})
export class App {
  currentYear = new Date().getFullYear();
}


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService, Project } from '../../services/api.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent implements OnInit {
  schoolProjects: Project[] = [
    {
      _id: '1',
      title: "Gentlemans Edge Barber",
      description: "A booking and reservation website where users can create, modify and delete their accounts, add bookings, and search for services. The website is designed to provide seamless navigation and hassle-free booking with a responsive and engaging interface.",
      image: "https://static.wixstatic.com/media/f0059a_40c7e0e46d7c49f08bf872ee9baaeaef~mv2.png/v1/fill/w_509,h_331,al_c,lg_1,q_85,enc_avif,quality_auto/Screenshot-2024-03-25-141919.png",
      technologies: ["React", "Node.js", "MongoDB", "Firebase"],
      link: "https://gentlemans-edge-barber.web.app/",
      github: "https://github.com/Simamkele20/Gentlemans_Edge_Barber.git",
      featured: true
    },
    {
      _id: '2',
      title: "Simamkele Enterprises",
      description: "An eCommerce project that offers a variety of products for users to explore and purchase with ease. Built with HTML5, Javascript and CSS, featuring a seamless browsing experience, add to cart functionality, and a user-friendly admin panel for product management.",
      image: "https://static.wixstatic.com/media/f0059a_fddeefb484e54972a61e606ce60e2b61~mv2.png/v1/crop/x_60,y_0,w_701,h_448/fill/w_518,h_331,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-04-03%20140042.png",
      technologies: ["HTML5", "CSS", "JavaScript"],
      link: "https://simamkele-enterprises.vercel.app/",
      github: "https://github.com/Simamkele20/Simamkele-Enterprises.git",
      featured: true
    },
    {
      _id: '3',
      title: "My Vue Portfolio",
      description: "A showcase of my work using Vue, Html 5, CSS, Bootstrap, Javascript and Node. This portfolio reflects my passion and dedication in the field with a focus on delivering customized, high-quality solutions tailored to specific client requirements.",
      image: "https://static.wixstatic.com/media/f0059a_ce490041f18e4e9bad0739bd70d99e2a~mv2.png/v1/crop/x_230,y_0,w_1139,h_769/fill/w_496,h_331,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-04-03%20140708.png",
      technologies: ["Vue.js", "HTML5", "CSS", "Bootstrap", "JavaScript", "Node.js"],
      link: "https://simamkele-vue-portfolio.web.app/",
      github: "https://github.com/Simamkele20/Simamkele-Vue-Portfolio.git",
      featured: false
    },
    {
      _id: '4',
      title: "Fitness For All",
      description: "A full-stack eCommerce website that sells gym and fitness products. Working as a Frontend Developer, I developed a great user interface and enhanced user experience. The project provided valuable experience in full-stack development and collaborative teamwork.",
      image: "https://static.wixstatic.com/media/f0059a_75e2ab0b521349578e7dc3d370b57092~mv2.png/v1/crop/x_249,y_0,w_1414,h_918/fill/w_510,h_331,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-04-23%20123357.png",
      technologies: ["React", "Node.js", "MongoDB", "Firebase"],
      link: "https://fitness-for-all-f5a3c.web.app/",
      github: "https://github.com/Simamkele20/FitnessForAll_EOMP",
      featured: false
    },
    {
      _id: '5',
      title: "Temperature Converter",
      description: "A visually appealing and functional application that demonstrates skills in HTML5, CSS, and Javascript. This project showcases my dedication to creating user-friendly applications with an excellent design.",
      image: "https://static.wixstatic.com/media/f0059a_4023adbe52df4021b3b6b4b5968d17e1~mv2.png/v1/crop/x_13,y_0,w_465,h_302/fill/w_510,h_331,al_c,lg_1,q_85,enc_avif,quality_auto/Screenshot%202024-01-10%20092117.png",
      technologies: ["HTML5", "CSS", "JavaScript"],
      link: "https://temperature-convector.vercel.app/",
      github: "https://github.com/Simamkele20/Temperature-Convector",
      featured: false
    },
    {
      _id: '6',
      title: "Calculator Clone",
      description: "A visually appealing calculator replica created with HTML5 and CSS for practice. While it doesn't have functional capabilities, it showcases design and coding abilities in frontend development.",
      image: "https://static.wixstatic.com/media/f0059a_94e62cf3826f448aa15677081bcaf739~mv2.png/v1/crop/x_0,y_323,w_421,h_273/fill/w_510,h_331,al_c,lg_1,q_85,enc_avif,quality_auto/Screenshot%202023-11-01%20103313.png",
      technologies: ["HTML5", "CSS"],
      link: "https://calculator-nine-brown.vercel.app/",
      github: "https://github.com/Simamkele20/Calculator",
      featured: false
    }
  ];

  sideProjects: Project[] = [
    {
      _id: '7',
      title: "TB Tours Cape Town",
      description: "A professional tour booking website for TB Tours Cape Town. Users can explore various tour packages, view tour details, and book tours seamlessly. Features a responsive design, tour gallery, pricing information, and integrated booking system.",
      image: "/tb-tours-logo-new.png",
      technologies: ["Angular", "TypeScript", "Node.js", "Express.js", "MongoDB"],
      link: "https://www.tb-tours.co.za/",
      github: "http://github.com/Simamkele20/TB-Tours-Project",
      featured: true
    }
  ];

  projects: Project[] = this.schoolProjects;
  loading = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}
}



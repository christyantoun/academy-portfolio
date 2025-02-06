import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../../shared/components/project-card/project-card.component'; 
@Component({
  selector: 'app-my-projects',
  imports: [ProjectCardComponent],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
project1_src: string = "./assets/project-1.png";
project2_src: string = "./assets/project-2.png";
project3_src: string = "./assets/project-3.png";

project1_alt: string = "Project 1";
project2_alt: string = "Project 2";
project3_alt: string = "Project 3";

project1_title: string = "Project 1";
project2_title: string = "Project 2";
project3_title: string = "Project 3";
}

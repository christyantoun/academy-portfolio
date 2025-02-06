import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      image: 'assets/project-1.png',
      title: 'Project 1',
      githubLink: 'https://github.com',
      liveDemoLink: 'https://google.com'
    },
    {
      image: 'assets/project-2.png',
      title: 'Project 2',
      githubLink: 'https://github.com',
      liveDemoLink: 'https://google.com'
    },
    {
      image: 'assets/project-3.png',
      title: 'Project 3',
      githubLink: 'https://github.com',
      liveDemoLink: 'https://google.com'
    }
  ]
}

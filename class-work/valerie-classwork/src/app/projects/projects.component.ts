import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  cards = [
    {
      image: 'images/project-1.png',
      title: 'PROJECT ONE',
      demoLink: 'https://github.com/',
      gitHubLink: 'https://github.com/',
    },
    {
      image: 'images/project-2.png',
      title: 'PROJECT TWO',
      demoLink: 'https://github.com/',
      gitHubLink: 'https://github.com/',
    },
    {
      image: 'images/project-3.png',
      title: 'PROJECT THREE',
      demoLink: 'https://github.com/',
      gitHubLink: 'https://github.com/',
    },
  ];
}

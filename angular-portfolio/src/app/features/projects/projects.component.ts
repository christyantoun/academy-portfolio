import { Component } from '@angular/core';
import type { Project } from 'src/app/shared/models/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Project One',
      imageUrl: './assets/project-1.png',
      githubUrl: 'https://github.com/',
      demoUrl: 'https://github.com/',
    },
    {
      name: 'Project Two',
      imageUrl: './assets/project-2.png',
      githubUrl: 'https://github.com/',
      demoUrl: 'https://github.com/',
    },
    {
      name: 'Project Three',
      imageUrl: './assets/project-3.png',
      githubUrl: 'https://github.com/',
      demoUrl: 'https://github.com/',
    },
  ];
}

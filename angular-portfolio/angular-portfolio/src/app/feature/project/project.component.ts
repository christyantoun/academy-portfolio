import { Component } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  projects: Project[] = [
    { id: 1, title: 'Project One', imageUrl: './assets/project-1.png', githubUrl: 'https://github.com/', liveDemoUrl: 'https://github.com/' },
    { id: 2, title: 'Project Two', imageUrl: './assets/project-2.png', githubUrl: 'https://github.com/', liveDemoUrl: 'https://github.com/' },
    { id: 3, title: 'Project Three', imageUrl: './assets/project-3.png', githubUrl: 'https://github.com/', liveDemoUrl: 'https://github.com/' }
  ];

  openUrl(url: string): void {
    window.open(url, '_blank');
  }
}




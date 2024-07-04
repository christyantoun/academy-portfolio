import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/projects.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      image: './assets/project-1.png',
      title: 'Project One',
      githubUrl: 'https://github.com/project1',
      demoUrl: 'https://project1.com'
    },
    {
      image: './assets/project-2.png',
      title: 'Project Two',
      githubUrl: 'https://github.com/project2',
      demoUrl: 'https://project2.com'
    },
    {
      image: './assets/project-3.png',
      title: 'Project Three',
      githubUrl: 'https://github.com/project3',
      demoUrl: 'https://project3.com'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

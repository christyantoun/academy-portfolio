import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: "Project One",
      img: "./assets/project-1.png"
    },
    {
      title: "Project Two",
      img: "assets/project-2.png"
    },
    {
      title: "Project Three",
      img: "assets/project-3.png"
    },
  ]
}

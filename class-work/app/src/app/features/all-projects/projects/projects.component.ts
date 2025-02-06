import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../../shared/all-projects/project-card/project-card.component';
import { PROJECTS } from "../../../../assets/projects";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectCardComponent,
    NgFor
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = PROJECTS;
}

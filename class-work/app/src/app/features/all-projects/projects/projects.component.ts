import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../../shared/all-projects/project-card/project-card.component';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectCardComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}

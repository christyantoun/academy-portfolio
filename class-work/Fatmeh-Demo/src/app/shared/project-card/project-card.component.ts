import { Component } from '@angular/core';
import { ButtonProjectsComponent } from "../button-projects/button-projects.component";


@Component({
  selector: 'app-project-card',
  imports: [ButtonProjectsComponent ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

}

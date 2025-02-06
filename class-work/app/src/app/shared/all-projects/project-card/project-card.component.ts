import { Component, Input } from '@angular/core';
import { ProjectButtonComponent } from '../project-button/project-button.component';

@Component({
  selector: 'app-project-card',
  imports: [
    ProjectButtonComponent
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() img: string = '';
  @Input() imgText: string = '';
  @Input() title: string = '';
}

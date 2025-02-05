import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-button',
  imports: [],
  templateUrl: './project-button.component.html',
  styleUrl: './project-button.component.scss'
})
export class ProjectButtonComponent {
  @Input() title: string = '';
}

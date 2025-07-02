import { Component, Input } from '@angular/core';
import { ButtonProjectsComponent } from "../button-projects/button-projects.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-project-card',
  standalone: true, 
  imports: [ButtonProjectsComponent, CommonModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() image: string = '';
  @Input() title: string = '';
}

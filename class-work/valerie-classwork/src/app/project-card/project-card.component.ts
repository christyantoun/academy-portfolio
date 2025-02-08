import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  standalone: true,
})
export class ProjectCardComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() gitHubLink: string = '';
  @Input() demoLink: string = '';

  openDemo() {
    window.location.href = this.demoLink;
  }
  openGit() {
    window.location.href = this.gitHubLink;
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() githubUrl!: string;
  @Input() demoUrl!: string;

  openLink(url: string) {
    window.open(url, '_blank');
  }
}

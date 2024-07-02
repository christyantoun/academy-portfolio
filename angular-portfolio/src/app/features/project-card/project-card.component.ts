import { Component, Input } from '@angular/core';
import type { Project } from 'src/app/shared/models/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project: Project | undefined = undefined;

  openUrl(url: string | undefined): void {
    if (!url) return;
    window.open(url, '_blank');
  }
}

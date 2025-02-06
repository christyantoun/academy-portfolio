import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  onClick(link: string, type: string) {
    if (type == 'demo') {
      if (confirm("Do you want to see a Live Demo of the project?")) {
        location.href = link
      }
    }
    else if (type == 'github') {
      if (confirm("Do you want to see the project's GitHub page?")) {
        location.href = link
      }
    }
  }
}

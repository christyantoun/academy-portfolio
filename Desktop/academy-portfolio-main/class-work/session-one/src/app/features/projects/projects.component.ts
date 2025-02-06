import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/components/card/card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project One',
      image: '/assets/project-1.png',
      github: 'https://github.com/project-one',
      demo: 'https://project-one-demo.com'
    },
    {
      title: 'Project Two',
      image: '/assets/project-2.png',
      github: 'https://github.com/project-two',
      demo: 'https://project-two-demo.com'
    },
    {
      title: 'Project Three',
      image: '/assets/project-3.png',
      github: 'https://github.com/project-three',
      demo: 'https://project-three-demo.com'
    }
  ];
}

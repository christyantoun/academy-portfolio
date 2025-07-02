import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [ButtonComponent,CommonModule],
  templateUrl: './project.component.html',
styleUrls: ['./project.component.scss']
})
export class ProjectComponent {



   openLink(url: string): void {
    if (url) {
  window.open(url, '_blank');

    }
}
}

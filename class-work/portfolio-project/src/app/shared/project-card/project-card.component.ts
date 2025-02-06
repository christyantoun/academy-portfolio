import { Component , Input} from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-project-card',
  imports: [ButtonComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() title: string = ''; 
  @Input() image: string = ''; 
  @Input() githubLink: string = ''; 
  @Input() liveDemoLink: string = ''; 



}

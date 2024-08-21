import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  @Input() experience: string = '4+ years';
  @Input() field: string = 'Web Development';
  @Input() degree: string = 'B.Sc. Bachelors Degree';
  @Input() university: string = 'University Name';
  @Input() description: string = 'Lorem ipsum dolor sit amet...';

  onAboutClick() {
    console.log('about clicked');
  }
}

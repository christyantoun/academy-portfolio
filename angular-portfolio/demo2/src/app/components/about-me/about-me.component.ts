import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAboutinput } from '../../interfaces/aboutinput';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  @Input() details?: IAboutinput;
  @Output() detailClicked = new EventEmitter<string>();

  onDetailClick() {
    if (this.details) {
      this.detailClicked.emit(this.details.alt);
    }
  }
}
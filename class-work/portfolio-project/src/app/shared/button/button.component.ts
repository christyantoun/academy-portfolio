import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = 'Click Me';
  @Input() url: string = '';
  @Input() darkMode: boolean = false; 

  redirect() {
    if (this.url) {
      window.open(this.url, '_blank');
    }
  }
}

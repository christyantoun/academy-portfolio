import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent], // ✅ Import ButtonComponent for buttons
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() description: string = '';
  @Input() github: string = '';
  @Input() demo: string = '';

  openLink(url: string) {
    window.open(url, '_blank');
  }
}

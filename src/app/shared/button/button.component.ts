import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
 @Input() showDownloadCV = false;
@Input() showContact = false;
@Input() showGitHub = false;
@Input() showLiveDemo = false;

@Input() githubLink = '';
@Input() liveDemoLink = '';
openLink(url: string): void {
  console.log('Button clicked with URL:', url);
  if (url) {
    window.open(url, '_blank');
  }
}

}



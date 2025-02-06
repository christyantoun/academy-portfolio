import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  downloadCV() {
    window.open('assets/resume-example.pdf', '_blank');
  }

  goToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}

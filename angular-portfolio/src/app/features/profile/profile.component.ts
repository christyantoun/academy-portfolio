import { Component, Input } from '@angular/core';
import type { Social } from 'src/app/shared/models/social';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  title: string = 'Christy Antoun';
  subTitle: string = 'Frontend Developer';
  socials: Social[] = [
    {
      name: 'Github',
      imageUrl: './assets/github.png',
      socialUrl: 'https://github.com',
    },
    {
      name: 'Linkedin',
      imageUrl: './assets/linkedin.png',
      socialUrl: 'https://linkedin.com',
    },
  ];

  navigateToSocialAccount(url: string): void {
    window.open(url, '_blank');
  }
}

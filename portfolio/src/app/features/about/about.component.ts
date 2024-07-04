import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutCards = [
    {
      icon: 'assets/experience.png',
      title: 'Experience',
      description: '3+ years <br />Frontend Development'
    },
    {
      icon: 'assets/education.png',
      title: 'Education',
      description: 'B.Sc. Bachelors Degree<br />Lebanese University'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}


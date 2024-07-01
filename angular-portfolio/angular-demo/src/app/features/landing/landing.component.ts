import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  customTitle: string = 'This is a random title'
  constructor() { }

  ngOnInit(): void {
  }

}

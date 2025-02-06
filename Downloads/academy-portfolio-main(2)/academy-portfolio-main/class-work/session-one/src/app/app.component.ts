import { Component } from '@angular/core';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet], 
  template: `<app-navbar></app-navbar> <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}

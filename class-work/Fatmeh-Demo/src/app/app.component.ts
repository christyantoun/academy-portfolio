import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Fatmeh-Demo';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoreModuleModule } from './core/core-module/core-module.module';
import { ProfileModule } from './features/profile/profile.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CoreModuleModule, ProfileModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularProject1';
}

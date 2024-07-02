import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    LandingComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LandingComponent,
    AboutComponent
  ]
})
export class FeatureModule { }

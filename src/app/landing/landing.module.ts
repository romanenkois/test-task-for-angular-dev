import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing/landing.component';
import { AddUsernamePipe } from './add-username.pipe';

@NgModule({
  declarations: [LandingComponent, AddUsernamePipe],
  imports: [CommonModule, LandingRoutingModule],
})
export class LandingModule {}

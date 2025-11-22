import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HasAccessTokenGuard } from './auth/has-access-token.guard';

const routes: Routes = [
  {
    path: 'projects',
    loadChildren: () => import('./landing/landing.module').then((m) => m.LandingModule),
    canActivate: [HasAccessTokenGuard],
  },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}

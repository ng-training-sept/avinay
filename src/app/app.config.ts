import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import { authGuard } from './service/auth.constants';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'sports', loadChildren: () => import('./forms/sports/sports.route').then(m => m.routes) },
  {
    path: 'grocery',
    loadChildren: () => import('./forms/grocery/grocery.route').then(m => m.routes),
    // canActivate: [authGuard]
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes)
  ]
};

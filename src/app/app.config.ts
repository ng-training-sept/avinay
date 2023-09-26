import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import { CardItemComponent } from './components/card/card-item/card-item.component';

export const routes: Routes = [
  { path: '', redirectTo: '/sports', pathMatch: 'full' },
  //{path: 'sports', component: SportsComponent}, // Eagerly loading route

  { path: 'sports', loadComponent: () => import('./forms/sports/sports.component').then(m => m.SportsComponent) }, // Lazily loading route
  { path: 'sports/card-item/:id', component: CardItemComponent}
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes)
  ]
};

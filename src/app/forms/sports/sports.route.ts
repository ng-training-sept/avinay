import { Route } from '@angular/router';
import { SportsComponent } from './sports.component';
import { CardItemComponent } from '../../components/card/card-item/card-item.component';

export const routes: Route[] = [
  { path: '', component: SportsComponent },
  { path: 'card-item/:id', component: CardItemComponent }
];

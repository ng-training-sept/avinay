import { Route } from '@angular/router';
import { CardItemComponent } from '../../components/card/card-item/card-item.component';
import { GroceryComponent } from './grocery.component';

export const routes: Route[] = [
  { path: '', component: GroceryComponent },
  { path: 'card-item/:id', component: CardItemComponent }
];


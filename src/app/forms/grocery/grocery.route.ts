import { Route } from '@angular/router';
import { CardItemComponent } from '../../components/card/card-item/card-item.component';
import { GroceryComponent } from './grocery.component';

export const routes: Route[] = [
  { path: '', component: GroceryComponent },
  { path: 'card-item/:id', component: CardItemComponent }
];


/*

component -> light weight

heavy lifting -> http calls -> service

grocery -> grocery list from server (service)

AuthService -> stores authservice -> anyone request -> Injector ()

Map ->
(key, value)

(authService, AuthService) --->

 */

import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../../components/card/card.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GroceryStore {

  private readonly httpClient = inject(HttpClient);

  groceries = new BehaviorSubject<Card[]>([]);

  fetchGrocery(): void {
    this.httpClient.get<Card[]>('http://localhost:3000/grocery').subscribe(response => {
      this.groceries.next(response);
    });
  }
}
/*

  Sports Component -> Add Grocery -> Reducer (If reducer understands add grocery) -> Update grocery list

  Actions -> notify
  Reducer -> actual data change
  Selector -> reads state from store

  Sports Component -> Fetch Grocery -> Effects (API Call) -> Set Grocery -> Reducer sets grocery and updates store

  Selector reads data from store and provides to component


 */

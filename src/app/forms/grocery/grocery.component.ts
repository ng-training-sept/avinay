import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../components/card/card.model';
import { CardComponent } from '../../components/card/card.component';
import { AuthService } from '../../service/auth.service';
import { LoggerService } from '../../service/logger.service';
import { NewLoggerService } from '../../service/new-logger.service';
import { LOGGER } from '../../service/logger';
import { GroceryStore } from './grocery.store';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule, CardComponent, HttpClientModule],
  providers: [
    { provide: LOGGER, useClass: NewLoggerService},
    GroceryStore,
  ],
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.scss']
})
export class GroceryComponent implements OnInit, OnDestroy {

  private readonly authService = inject(AuthService);
  private readonly logger = inject(LOGGER);
  private readonly groceryStore = inject(GroceryStore);

  // private readonly unsubscribe = new Subject<void>();

  groceries!: Card[];
  grocerySubscription!: Subscription;

  ngOnInit(): void {
    this.grocerySubscription = this.groceryStore.groceries
      .subscribe(groceries => this.groceries = groceries);

    // this.groceryStore.groceries.pipe(
    //   takeUntil(this.unsubscribe)
    // ).subscribe(groceries => this.groceries = groceries);

    this.logger.log();
    this.groceryStore.fetchGrocery();
  }

  ngOnDestroy() {
    this.grocerySubscription.unsubscribe();

    // this.unsubscribe.next();
    // this.unsubscribe.complete();
  }
}

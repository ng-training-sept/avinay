import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { SportsComponent } from './forms/sports/sports.component';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { filter, map, Observable, of, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    HeaderComponent,
    SportsComponent,
    RouterOutlet,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  observable!: Observable<number>;
  subscription!: Subscription;
  private secondSub!: Subscription;

  ngOnInit(): void {
    // initializing an observable
    this.observable = new Observable(subscriber => {
      // emitting next value
      subscriber.next(101);
      subscriber.next(1);
      setTimeout(() => subscriber.next(2), 1000);

      setTimeout(() => {
        // after 7 seconds emitting value 66
        subscriber.next(66);
        // after 7 seconds completing the observable meaning observable is done emitting the value
        subscriber.complete();
      }, 7000);
    });

    this.subscription = this.observable.pipe(
    ).subscribe({
      next(val) {
        console.log(`from first next val is ${val}`);
      },
      error(err) {
        console.log(`something went wrong: ${err}`);
      },
      complete() {
        console.log('completed');
      }
    });

    setTimeout(() => {
      this.secondSub = this.observable.pipe().subscribe({
        next(val) {
          console.log(`from second sub next val is ${val}`);
        },
        error(err) {
          console.log(`from second sub something went wrong: ${err}`);
        },
        complete() {
          console.log('from second sub completed');
        }
      });
    }, 2000)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  persons: string[] = ['Chris', 'Adam'];

  addCard(title: string): void {
    this.persons.push(title);
  }
}



/*

CURRENCY -> 2000

UI -> $2000, NRs. 20000
 pipe -> input -> transformed input (output)

 */

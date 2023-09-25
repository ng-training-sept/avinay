import { Component, Input } from '@angular/core';
import { DatePipe, LowerCasePipe, NgForOf, SlicePipe, UpperCasePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SpecialDirective } from '../../directives/special.directive';
import { MatInputModule } from '@angular/material/input';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { Card } from './card.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgForOf,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    SpecialDirective,
    MatInputModule,
    LowerCasePipe,
    DatePipe,
    ReversePipe,
    UpperCasePipe,
    SlicePipe
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() cards: Card[] = [];
}

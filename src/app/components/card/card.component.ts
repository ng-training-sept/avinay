import { Component, inject, Input } from '@angular/core';
import { DatePipe, LowerCasePipe, NgForOf, SlicePipe, UpperCasePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SpecialDirective } from '../../directives/special.directive';
import { MatInputModule } from '@angular/material/input';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { Card } from './card.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemSaveUpdateComponent } from '../item-save-update/item-save-update.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

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
    SlicePipe,
    MatDialogModule
  ],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly dialog = inject(MatDialog);

  @Input() cards: Card[] = [];

  goToItemDetails(data: Card): void {
    this.router.navigate(['card-item', data.id], {state: {data}, relativeTo: this.route}).then();
  }

  openItemDialog(data: Card): void {
    const dialogRef = this.dialog.open(ItemSaveUpdateComponent, {
      data // initial data to dialog (remember dialogData in ItemSaveUpdateComponent)
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result?.data) {
        console.log(result.data);
        // emit update event and call service from parent to update card
      }
    });
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-item-save-update',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, MatInputModule, MatButtonModule],
  templateUrl: './item-save-update.component.html',
  styleUrls: ['./item-save-update.component.scss']
})
export class ItemSaveUpdateComponent implements OnInit {

  // we will use dialogRef later to dynamically close dialog when user clicks save
  private readonly dialogRef = inject(MatDialogRef);

  // injecting dialogData to access whatever data is passed when we initially open dialog
  // for example, we can send item/card information that we want to update
  // and use this information to population form
  readonly dialogData = inject(MAT_DIALOG_DATA);

  itemForm!: FormGroup;

  ngOnInit(): void {
    this.initItemForm();
    this.patchItemForm();
  }

  initItemForm(): void {
    this.itemForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      imageUrl: new FormControl(''),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      description: new FormControl('')
    });
  }

  patchItemForm(): void {
    if (this.dialogData) {
      this.itemForm.patchValue({
        name: this.dialogData.name,
        imageUrl: this.dialogData.imageUrl,
        price: this.dialogData.price,
        description: this.dialogData.description
      });
    }
  }

  onSaveOrUpdate(): void {
    this.dialogRef.close({ data: this.itemForm.value });
  }
}

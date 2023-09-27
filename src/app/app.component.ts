import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { SportsComponent } from './forms/sports/sports.component';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

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
export class AppComponent implements OnInit {

  firstName!: FormControl;

  ngOnInit() {
    this.firstName = new FormControl('Ava', [Validators.required, Validators.minLength(5)]);
    this.firstName.valueChanges.subscribe(val => console.log(val));
    console.log(JSON.stringify(this.firstName.errors));
  }
}


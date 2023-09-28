import { Component, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../components/card/card.model';
import { CardComponent } from '../../components/card/card.component';
import { AuthService } from '../../service/auth.service';
import { LoggerService } from '../../service/logger.service';
import { NewLoggerService } from '../../service/new-logger.service';
import { LOGGER } from '../../service/logger';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SportsStore } from './sports.store';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [CommonModule, CardComponent, HttpClientModule],
  providers: [
    AuthService,
    {provide: LOGGER, useClass: LoggerService},
    SportsStore
  ],
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  private readonly authService = inject(AuthService);
  readonly sportsStore = inject(SportsStore);

  ngOnInit(): void {
   this.sportsStore.fetchSports();
   setTimeout(() => {
     this.sportsStore.saveSport({
       id: 'test 2',
       name: 'Test 2',
       description: 'test 2',
       price: 603.55,
       imageUrl: ''
     });
   }, 5000)
  }

}

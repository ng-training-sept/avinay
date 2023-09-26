import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../components/card/card.model';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  sportsCard!: Card[];

  ngOnInit(): void {
    this.sportsCard = [
      {
        id: '1',
        name: 'Football',
        price: 1500,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg',
        description: 'Football description'
      },
      {
        id: 'id2',
        name: 'Football Boot',
        price: 6000,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/AdidasEtruscoBoot.jpg/230px-AdidasEtruscoBoot.jpg',
        description: 'Football description'
      }
    ];
  }

}

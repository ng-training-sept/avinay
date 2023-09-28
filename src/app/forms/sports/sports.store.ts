import { computed, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Card } from '../../components/card/card.model';
import { HttpClient } from '@angular/common/http';

export type SportsState = {
  sports: Card[];
}

@Injectable()
export class SportsStore {

  private readonly httpClient = inject(HttpClient);

  private state: WritableSignal<SportsState> = signal<SportsState>({
    sports: []
  });

  sports: Signal<Card[]> = computed(() => this.state().sports);

  fetchSports(): void {
    this.httpClient.get<Card[]>('http://localhost:3000/sports').subscribe(response => {
      this.state.set({ sports: response });
    });
  }

  saveSport(sport: Card): void {
    this.httpClient.post<Card>('http://localhost:3000/sports', sport).subscribe(res => {
      this.state.mutate(state => state.sports.push(res));
    });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
  <ul>
    @for (game of games; track game.id){ 

    }
</ul>
  `,
  styles: `
  `
})
export class GamesComponent {
games = [
  {
    id: 1,
    name: 'Uncharted'
  },
  {
    id: 2,
    name: 'Horizon'
  },
  {
    id: 3,
    name: 'Diablo'
  },
]
}

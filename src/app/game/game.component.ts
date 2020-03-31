import {Component, OnInit} from '@angular/core';
import {IGame} from '../shared/models/game.model';
import {ActivatedRoute} from '@angular/router';
import {GamesService} from '../core/services/games.service';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'cl-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [
    trigger('gameImageAnimation', [
      transition(':enter', [
        style({transform: 'translateX(-100%)', opacity: 0}),
        animate('1s cubic-bezier(.1,.99,.33,1)', style({transform: 'translateX(0)', opacity: 1}))
      ])
    ])
  ]
})
export class GameComponent implements OnInit {
  game: IGame;

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService
  ) {
    this.gamesService.game$.subscribe(game => {
      this.game = game;
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.gamesService.getGame(params.id);
    });
  }

}

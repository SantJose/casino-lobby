import {Component, OnInit} from '@angular/core';
import {IGame} from '../shared/models/game.model';
import {ActivatedRoute} from '@angular/router';
import {GamesService} from '../core/services/games.service';

@Component({
  selector: 'cl-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
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

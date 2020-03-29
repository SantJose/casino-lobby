import {Component, OnInit} from '@angular/core';
import {GamesService} from '../core/services/games.service';

@Component({
  selector: 'cl-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  games$ = this.gamesService.getGames();

  constructor(
    private gamesService: GamesService
  ) {
  }

  ngOnInit(): void {
  }

}

import {Component, OnInit} from '@angular/core';
import {GamesService} from '../core/services/games.service';
import {Observable} from 'rxjs';
import {IGame} from '../shared/models/game.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'cl-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  gamesToShow$: Observable<IGame[]>;
  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value) {
    this._searchTerm = value;
    this.gamesToShow$ = this.gamesService.getGames().pipe(
      map((games) => games.filter((game) => {
        if (this.searchTerm && this.searchTerm !== '') {
          return game.name.toLocaleLowerCase().indexOf(this.searchTerm.toLocaleLowerCase()) !== -1;
        }
        return true;
      })),
      map((game) => {
        console.log(game);
        return game;
      })
    );
  }

  constructor(
    private gamesService: GamesService
  ) {
  }

  ngOnInit(): void {
    this.gamesToShow$ = this.gamesService.getGames();
  }

  getGames() {
    return this.gamesService.getGames();
  }

}

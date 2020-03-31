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
  private _catSelected: string;

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value) {
    this._searchTerm = value;
    this.filterGames();
  }

  constructor(
    private gamesService: GamesService
  ) {
    this.gamesToShow$ = this.gamesService.getGames();
  }

  ngOnInit(): void {
  }

  getCats() {
    return this.gamesService.cats || [];
  }

  onCategorySelected(cat: string) {
    this._catSelected = cat && (cat + '');
    this.filterGames();
  }

  // TODO - NS - improve logic
  private filterGames() {
    this.gamesToShow$ = this.gamesService.getGames().pipe(
      map((games) => games.filter((game) => {
        if (this._searchTerm && this._searchTerm !== '') {
          return game.name.toLocaleLowerCase().indexOf(this._searchTerm.toLocaleLowerCase()) !== -1;
        }
        return true;
      }).filter((game) => {
        if (this._catSelected && this._catSelected !== '' && game.cats && game.cats.length !== 0) {
          return game.categories.indexOf(this._catSelected) !== -1;
        }
        return true;
      })),
    );
  }

}

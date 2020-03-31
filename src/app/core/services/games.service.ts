import {Injectable} from '@angular/core';
import {IGame} from '../../shared/models/game.model';
import {Observable, of, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {IGameCat} from '../../shared/models/game-cat.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  games: IGame[];
  game$: Subject<IGame> = new Subject();
  cats: IGameCat[] = [];

  constructor(
    private http: HttpClient
  ) {
  }

  getGames(): Observable<IGame[]> {
    if (this.games) {
      return of(this.games);
    }
    return this.http.get<IGame[]>(`${environment.GAMES_REST_URL}`).pipe(
      tap((games) => this.games = games || []),
      tap((games) => {
        this.cats = games
          .map(game => game.cats)
          .reduce((result, cats) => [...result, ...cats])
          .filter((c, i, arr) => arr.findIndex(t => t.id === c.id) === i)
          .sort((ca, cb) => {
            const idA = Number(ca.id);
            const idB = Number(cb.id);
            if (idA > idB) {
              return 1;
            }
            if (idA < idB) {
              return -1;
            }
            return 0;
          });
      })
    );
  }

  getGame(id: string): void {
    if (this.games) {
      const game = this.games.find(g => g.id === id);
      if (game) {
        this.game$.next(game);
      }
    } else {
      this.http.get<IGame[]>(`${environment.GAMES_REST_URL}`).subscribe((games) => {
        this.games = games || [];
        this.getGame(id);
      });
    }
  }

}

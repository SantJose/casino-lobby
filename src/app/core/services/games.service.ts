import {Injectable} from '@angular/core';
import {IGame} from '../../shared/models/game.model';
import {Observable, of, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  games: IGame[];
  game$: Subject<IGame> = new Subject();

  constructor(
    private http: HttpClient
  ) {
  }

  getGames(): Observable<IGame[]> {
    if (this.games) {
      return of(this.games);
    }
    return this.http.get<IGame[]>(`${environment.GAMES_REST_URL}`).pipe(
      tap((games) => this.games = games)
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
        this.games = games;
        this.getGame(id);
      });
    }
  }

}

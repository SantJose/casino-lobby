import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IGame} from '../shared/models/game.model';

@Component({
  selector: 'cl-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  @Input() games$: Observable<IGame[]>;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

}

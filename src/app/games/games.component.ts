import {Component, Input, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IGame} from '../shared/models/game.model';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'cl-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
  animations: [
    trigger('gamesAnimation', [
      transition(':enter', [
        style({transform: 'translateY(100%)', opacity: 0}),
        animate('1s cubic-bezier(.1,.99,.33,1)', style({transform: 'translateY(0)', opacity: 1}))
      ])
    ])
  ]
})
export class GamesComponent implements OnInit {

  @Input() games$: Observable<IGame[]> = of([]);

  constructor() {
  }

  ngOnInit(): void {
  }

}

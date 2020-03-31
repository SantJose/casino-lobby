import {async, TestBed} from '@angular/core/testing';

import {GameComponent} from './game.component';
import {GamesService} from '../core/services/games.service';
import {ActivatedRoute} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';


describe('GameComponent', () => {
  let route: ActivatedRoute;
  let gamesService: GamesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    route = TestBed.inject(ActivatedRoute);
    gamesService = TestBed.inject(GamesService);
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(GameComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

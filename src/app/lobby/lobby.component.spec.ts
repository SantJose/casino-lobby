import {async, TestBed} from '@angular/core/testing';

import {LobbyComponent} from './lobby.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {GamesComponent} from '../games/games.component';

describe('LobbyComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
      ],
      declarations: [
        LobbyComponent,
        GamesComponent
      ]
    })
      .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(LobbyComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

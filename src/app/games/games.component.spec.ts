import {async, TestBed} from '@angular/core/testing';

import {GamesComponent} from './games.component';

describe('GamesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GamesComponent]
    })
      .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(GamesComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});

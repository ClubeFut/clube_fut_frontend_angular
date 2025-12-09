import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGames } from './card-games';

describe('CardGames', () => {
  let component: CardGames;
  let fixture: ComponentFixture<CardGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardGames]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGames);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-games',
  imports: [
    CommonModule
  ],
  templateUrl: './card-games.html',
  styleUrl: './card-games.scss',
})
export class CardGames {
  @Input() timeUm: string = "";
  @Input() timeDois: string = "";
  @Input() dia: string = "";
  @Input() mes: string = "";
  @Input() ano: string = "";
  @Input() horas: string = "";
  @Input() minutos: string = "";
  @Input() local: string = "";
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-games',
  imports: [
    CommonModule,
    FormsModule,
    Footer
  ],
  templateUrl: './games.html',
  styleUrl: './games.scss',
})
export class Games {
  estaSendoExibidoFiltroPersonalizados: boolean = false;

  mostreTodosJogos(){
    const btnPersonalizado = document.getElementById("btn__personalizado");
    const btnTodos = document.getElementById("btn__todos");

    if(btnPersonalizado && btnTodos){
      btnPersonalizado.classList.remove("active");
      btnTodos.classList.add("active");
    }

    this.estaSendoExibidoFiltroPersonalizados = false;
  }

  mostreJogosFiltroPersonalizado(){
    const btnPersonalizado = document.getElementById("btn__personalizado");
    const btnTodos = document.getElementById("btn__todos");

    if(btnPersonalizado && btnTodos){
      btnPersonalizado.classList.add("active");
      btnTodos.classList.remove("active");
    }

    this.estaSendoExibidoFiltroPersonalizados = true;
  }
}

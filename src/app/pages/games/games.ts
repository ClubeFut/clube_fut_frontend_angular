import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Footer } from '../../shared/footer/footer';
import { CardGames } from '../../components/card-games/card-games';

@Component({
  selector: 'app-games',
  imports: [
    CommonModule,
    FormsModule,
    Footer,
    CardGames
  ],
  templateUrl: './games.html',
  styleUrl: './games.scss',
})
export class Games {
  estaSendoExibidoFiltroPersonalizados: boolean = false;

  jogos: any = [
    {
      data_hora:{
        data:{
          dia: "30",
          mes: "dez",
          ano: "2025"
        },
        hora:{
          horas: "07",
          minutos: "00"
        },
      },
      times:{
        time_um: "Bahia FC",
        time_dois: "Fluminense FC"
      },
      local:{
        nome: "Campo da Associação"
      }
    },
    {
      data_hora:{
        data:{
          dia: "30",
          mes: "dez",
          ano: "2025"
        },
        hora:{
          horas: "07",
          minutos: "00"
        },
      },
      times:{
        time_um: "Bahia FC",
        time_dois: "Fluminense FC"
      },
      local:{
        nome: "Campo da Associação"
      }
    },
    {
      data_hora:{
        data:{
          dia: "30",
          mes: "dez",
          ano: "2025"
        },
        hora:{
          horas: "07",
          minutos: "00"
        },
      },
      times:{
        time_um: "Bahia FC",
        time_dois: "Fluminense FC"
      },
      local:{
        nome: "Campo da Associação"
      }
    },
  ]

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

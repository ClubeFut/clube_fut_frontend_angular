import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Conta } from '../../services/conta';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  /**dados form */
  form = {
    email: "",
    senha: ""
  };

  /**callback */
  callbackVisivel: boolean = false;
  callbackTipo: string = "";
  callbackTexto: string = "";

  constructor(
    private readonly contaService: Conta
  ){}

  validarCampos(){
    if(
      !this.form.email ||
      !this.form.senha
    ){
      this.callbackVisivel = true;
      this.callbackTexto = "Campos obrigatórios vazios!";
      this.callbackTipo = "error";

      setTimeout(() => {
        this.callbackVisivel = false;
        this.callbackTexto = "";
        this.callbackTipo = "";
      }, 5000);
    }
  }

  registrarConta(){
    this.validarCampos();

    this.contaService.realizarLogin(
      this.form.email,
      this.form.senha
    ).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}

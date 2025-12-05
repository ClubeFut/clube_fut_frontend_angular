import { Component } from '@angular/core';
import { Conta } from '../../services/conta';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  senhaSendoExibida: boolean = false;

  /**dados form */
  confirmarSenha: string = "";
  form = {
    nomeCOmpleto: "",
    tipoConta: "",
    email: "",
    senha: ""
  };

  /**callback */
  callbackVisivel: boolean = false;
  callbackTipo: string = ""; //success or false
  callbackTexto: string = "";

  constructor(
    private readonly contaService: Conta
  ){}

  validarCampos(){
    if(this.confirmarSenha !== this.form.senha){
      this.callbackVisivel = true;
      this.callbackTexto = "Senhas diferentes!";
      this.callbackTipo = "error";

      setTimeout(() => {
        this.callbackVisivel = false;
        this.callbackTexto = "";
        this.callbackTipo = "";
      }, 5000);
    }

    if(
      !this.form.nomeCOmpleto ||
      !this.form.email ||
      !this.form.tipoConta ||
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

    this.contaService.registrarConta(
      this.form.nomeCOmpleto,
      this.form.email,
      this.form.tipoConta,
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

  mostrarSenha(){
    this.senhaSendoExibida = true;
  }

  esconderSenha(){
    this.senhaSendoExibida = false;
  }
}

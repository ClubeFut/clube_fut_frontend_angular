import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Conta {
  urlContaAPILocal: string = "http://localhost:3000/api/contas";

  constructor(
    private readonly http: HttpClient
  ){}

  registrarConta(
    nomeCompleto: string,
    email: string,
    tipoConta: string,
    senha: string
  ){
    const body = {
      nomeCompleto,
      email,
      tipoConta,
      senha
    };

    return this.http.post(this.urlContaAPILocal + "/registrar-conta", body);
  }

  realizarLogin(
    email: string,
    senha: string
  ){

  }
}

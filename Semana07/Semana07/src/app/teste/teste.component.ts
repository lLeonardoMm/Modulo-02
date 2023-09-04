import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent {
  valor1 = 0
  valor2 = 0
  operacao = ""
  restuldadoFinal = 0
  clicado = false

  Mais(){
    this.restuldadoFinal = this.valor1 + this.valor2
    this.operacao = "+"
    this.clicado = false
  }
  Menos(){
    this.restuldadoFinal = this.valor1 - this.valor2
    this.operacao = "-"
    this.clicado = false
  }
  Vezes(){
    this.restuldadoFinal = this.valor1 * this.valor2
    this.operacao = "*"
    this.clicado = false
  }
  Divisao(){
    this.restuldadoFinal = this.valor1 / this.valor2
    this.operacao = "/"
    this.clicado = false
  }

  Calcular(){
    this.clicado = true
  }
  Limpar(){
    this.clicado = false
    this.operacao = ""
    this.valor1 = 0 
    this.valor2 = 0
  }
}

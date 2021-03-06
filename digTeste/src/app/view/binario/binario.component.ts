import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binario',
  templateUrl: './binario.component.html',
  styleUrls: ['./binario.component.scss']
})

export class BinarioComponent implements OnInit {
  public primeiroNumeroBinario: string;
  public segundoNumeroBinario: string;
  public operacao: string;
  public fraseResultado = '';
  constructor() { }

  ngOnInit(): void {
  }

  calcular(): void {
    const valorInteiro1 = parseInt(this.primeiroNumeroBinario, 2);
    const valorInteiro2 = parseInt(this.segundoNumeroBinario, 2);

    if (valorInteiro1 > 255) {
      this.fraseResultado = 'Primeiro numero é Maior que 255';
      return;
    }
    if (valorInteiro2 > 255) {
      this.fraseResultado = 'Segundo numero é Maior que 255';
      return;
    }

    switch (this.operacao) {
    case '+':
        this.criarFraseResultado(valorInteiro1 + valorInteiro2);
        break;
    case '-':
        this.criarFraseResultado(valorInteiro1 - valorInteiro2);
        break;
    case '*':
        this.criarFraseResultado(valorInteiro1 * valorInteiro2);
        break;
    case '/':
        this.criarFraseResultado(valorInteiro1 / valorInteiro2);
        break;
    case '%':
        this.criarFraseResultado(valorInteiro1 % valorInteiro2);
        break;
    }
  }

  criarFraseResultado(result: number): void {
    this.fraseResultado =  `Resultado de ${this.primeiroNumeroBinario} ${this.operacao} ${this.segundoNumeroBinario} = ${result.toString(2)}`;
  }
}

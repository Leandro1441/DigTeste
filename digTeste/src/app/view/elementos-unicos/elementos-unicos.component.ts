import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elementos-unicos',
  templateUrl: './elementos-unicos.component.html',
  styleUrls: ['./elementos-unicos.component.scss']
})

export class ElementosUnicosComponent implements OnInit {

  public numeroInteiro: string;
  public listaNumeros: number[] = [];
  public fraseTextArea = '';

  constructor() { }

  ngOnInit(): void {
  }

  adicionarNumeroLista(): void {
    const numeroDecimal = parseInt(this.numeroInteiro, 10);
    const numeroNoArray = this.listaNumeros.find((numero => numero === numeroDecimal));

    if (numeroDecimal <= 1000 && !numeroNoArray) {
      this.listaNumeros.push(numeroDecimal);
      this.fraseTextArea = this.listaNumeros.sort().toString();
    }
  }

  limpar(): void {
    this.fraseTextArea = '';
  }
}

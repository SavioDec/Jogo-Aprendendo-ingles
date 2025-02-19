import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

import { Coracao } from '../shared/coracao.mode';

@Component({
  selector: 'app-tentativas',
  standalone: false,
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css'],
})
export class TentativasComponent implements OnInit, OnChanges {
  @Input() public tentativas!: number;

  public coracoes: Array<Coracao> = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ];

  constructor() {

  }

  ngOnChanges() {
    // depois de haver mudanças
    //this.tentativas
    //this.coracoes.length
    if (this.tentativas !== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice - 1].cheio = false;
    }
  }

  ngOnInit() {
    // metode de ciclo de vida do componente
  }
}

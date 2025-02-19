import { Component, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  standalone: false,
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css',
})
export class PainelComponent implements OnDestroy {
  public frases: Array<Frase> = FRASES;
  public instrucao: string = 'Traduza a frase';
  public resposta: string = '';

  public rodada: number = 0;

  public rodadaFrase!: Frase;
  public progresso: number = 0;

  public tentativas: number = 3;

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  ngOnDestroy(): void {
    console.log("componente painel foi destruido")
  }

  public atualizaResposta(respostaHtml: Event): void {
    this.resposta = (<HTMLInputElement>respostaHtml.target).value;
    console.log(this.resposta);
  }

  public verificarResposta(): void {
    console.log(this.tentativas);
    if (this.rodadaFrase.frasePtBr == this.resposta) {

      //trocar pergunta da rodada
      this.rodada++;

      // progresso
      this.progresso = this.progresso + 100 / this.frases.length;

      //Vitoria
      if (this.rodada === 4) {
        this.encerrarJogo.emit('vitoria');
      }

      //atualiza o objeto rodadaFrase
      this.atualizaRodada();
    } else {
      //diminuir a variavel tentativas
      this.tentativas--;

      //derrota
      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota');
      }
    }
  }

  public atualizaRodada(): void {
    //define a frase da rodada
    this.rodadaFrase = this.frases[this.rodada];

    //limpa a resposta
    this.resposta = '';
  }
}

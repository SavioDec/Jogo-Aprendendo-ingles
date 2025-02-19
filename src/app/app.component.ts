import { Component } from '@angular/core';
import { TopoComponent } from './topo/topo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public jogoEmAndamento: boolean = true
  public tipoEncerramento!: string;
  public encerrarJogo(tipo: string):void {

    this.jogoEmAndamento = false;
    this.tipoEncerramento = tipo;
  }


  public reiniciarJogo(): void {
    this.jogoEmAndamento = true;
    this.tipoEncerramento != undefined;
  }

}

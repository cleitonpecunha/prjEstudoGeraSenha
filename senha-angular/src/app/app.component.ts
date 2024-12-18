import { CaracteristicaSenhaComponent } from './components/caracteristica-senha.component';
import { Component } from '@angular/core';
import { ExibirSenhaComponent } from './components/exibir-senha.component';
import { ForcaSenhaComponent } from './components/forca-senha.component';
import { RouterOutlet } from '@angular/router';
import { Senha } from 'regras';
import { TamanhoSenhaComponent } from './components/tamanho-senha.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ExibirSenhaComponent,
    CaracteristicaSenhaComponent,
    TamanhoSenhaComponent,
    ForcaSenhaComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  tamanho: number = 8;
  maiusculas: boolean = true;
  minusculas: boolean = true;
  numeros: boolean = true;
  simbolos: boolean = true;

  get senha() {
    return Senha.gerar({
      tamanho: this.tamanho,
      maiusculas: this.maiusculas,
      minusculas: this.minusculas,
      numeros: this.numeros,
      simbolos: this.simbolos,
    });
  }

  get nivel() {
    return Senha.nivel(this.senha);
  }

  alterarTamanho(valor: number) {
    this.tamanho = valor;
  }

  alterarMaiusculas(valor: boolean) {
    this.maiusculas = valor;
  }

  alterarMinusculas(valor: boolean) {
    this.minusculas = valor;
  }

  alterarNumeros(valor: boolean) {
    this.numeros = valor;
  }

  alterarSimbolos(valor: boolean) {
    this.simbolos = valor;
  }
}

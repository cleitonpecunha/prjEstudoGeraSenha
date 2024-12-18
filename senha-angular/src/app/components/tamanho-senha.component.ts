import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tamanho-senha',
  standalone: true,
  imports: [],
  templateUrl: './tamanho-senha.component.html',
})
export class TamanhoSenhaComponent {
  @Input() tamanho: number = 8;
  @Output() tamanhoMudou = new EventEmitter<number>();

  alterarTamanho(evento: Event) {
    const elemento = evento.target as HTMLInputElement;
    this.tamanho = +elemento.value;
    this.tamanhoMudou.emit(this.tamanho);
  }
}

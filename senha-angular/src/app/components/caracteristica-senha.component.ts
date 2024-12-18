import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristica-senha',
  standalone: true,
  imports: [],
  templateUrl: './caracteristica-senha.component.html',
})
export class CaracteristicaSenhaComponent {
  @Input() texto: string = '';
  @Input() valor: boolean = false;
  @Output() valorMudou = new EventEmitter<boolean>();

  alternarValor() {
    this.valor = !this.valor;
    this.valorMudou.emit(this.valor);
  }
}

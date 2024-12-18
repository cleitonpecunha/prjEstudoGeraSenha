import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { tablerCopy } from '@ng-icons/tabler-icons';

@Component({
  selector: 'app-exibir-senha',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './exibir-senha.component.html',
  providers: [provideIcons({ tablerCopy })],
})
export class ExibirSenhaComponent {
  icone = tablerCopy;
  @Input() senha: string = '';

  copiarParaAreaTransferencia() {
    navigator.clipboard.writeText(this.senha);
    alert('Senha copiada para a área de transferência');
  }
}

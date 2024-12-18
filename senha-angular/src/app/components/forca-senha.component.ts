import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forca-senha',
  standalone: true,
  imports: [],
  templateUrl: './forca-senha.component.html',
})
export class ForcaSenhaComponent {
  @Input() nivel: 0 | 1 | 2 | 3 | 4 = 0;

  get classe() {
    return [
      this.nivel == 1 ? 'fraca' : '',
      this.nivel == 2 ? 'media' : '',
      this.nivel == 3 ? 'media' : '',
      this.nivel == 4 ? 'forte' : '',
    ].join('');
  }
}

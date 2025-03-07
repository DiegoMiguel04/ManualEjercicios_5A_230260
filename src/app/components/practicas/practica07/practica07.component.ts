import {Component} from '@angular/core';

@Component({
  selector: 'app-practica07',
  template: `
    <section (mouseover)="onMouseOver()">
      Aqui hay un mensaje secreto, pasa el cursor para revelarlo:
      <span class="font-bold">{{ message }}</span>
    </section>
  `,
})
export class Practica07Component {
  message = '';

  onMouseOver() {
    this.message = 'Dieguito estuvo aqui 😶‍🌫️';
  }
}
import {Component} from '@angular/core';

@Component({
  selector: 'app-practica02',
  template: `
    Hola {{ city }}, {{ 1 + 1 }}
  `,
})
export class Practica02Component {
  city = 'Huauchinango';
}

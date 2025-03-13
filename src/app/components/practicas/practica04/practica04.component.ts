import {Component} from '@angular/core';

@Component({
  selector: 'app-practica04',
  template: `
    @if (isServerRunning) {
    <span>El servidor se esta ejecutando</span>
    } @else {
    <span>El servidor no se esta ejecutando</span>
    }
  `,
})

export class Practica04Component {
  isServerRunning = false;
}
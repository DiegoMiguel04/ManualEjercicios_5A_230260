import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-practica08-a',
  template: `
    <p>The user's name is {{ name }}</p>
  `,
})
export class Practica08AComponent {
  @Input() name = '';
}
import {Component} from '@angular/core';
import { Practica09AComponent } from './practica09a.component';

@Component({
  selector: 'app-practica09-b',
  template: `
    <app-practica09-a (addItemEvent)="addItem($event)" />
    <p>🥶 all the way down {{ items.length }}</p>
  `,
  imports: [Practica09AComponent],
})

export class Practica09BComponent {
  items = new Array();

  addItem(item: string) {
    this.items.push(item);
  }
}
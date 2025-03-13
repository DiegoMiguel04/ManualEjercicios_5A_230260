import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-practica09-a',
  styles: `.btn {padding: 5px 15px 5px 15px; background: #c7c7c7; border-radius: 5px; cursor: pointer; transition: 0.4s;} .btn:hover {background: #b7b7b7;}`,
  template: `
    <button class="btn" (click)="addItem()">Add Item</button>
  `,
})

export class Practica09AComponent {
  @Output() addItemEvent = new EventEmitter<string>();

  addItem() {
    this.addItemEvent.emit('🥶');
  }
}
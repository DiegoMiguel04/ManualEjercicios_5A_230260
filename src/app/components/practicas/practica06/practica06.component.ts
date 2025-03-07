import {Component} from '@angular/core';

@Component({
  selector: 'app-practica06',
  styleUrls: ['app.component.css'],
  template: `
    <div [contentEditable]="isEditable" class="border-pink-600 border-2 rounded-sm pl-2"></div>
  `,
})

export class Practica06Component {
  isEditable = true;
}
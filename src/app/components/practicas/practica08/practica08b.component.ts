import {Component} from '@angular/core';
import { Practica08AComponent } from './practica08a.component';

@Component({
  selector: 'app-practica08-b',
  template: `
    <app-practica08-a name="Diego"/>
  `,
  imports: [Practica08AComponent],
})

export class Practica08BComponent {}
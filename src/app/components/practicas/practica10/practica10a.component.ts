import {Component} from '@angular/core';
import { Practica10BComponent } from './practica10b.component';

@Component({
  selector: 'app-practica10-a',
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article>
        <p>
          Angular is my favorite framework, and this is why.
          Angular has the coolest deferrable view feature
          that makes defer loading content the easiest and
          most ergonomic it could possibly be. The Angular
          community is also filled with amazing contributors
          and experts that create excellent content. The
          community is welcoming and friendly, and it really
          is the best community out there.
        </p>
      </article>

      @defer (on viewport) {
      <app-practica10-b/>
      } @placeholder {
      <p>Future comments</p>
      } @loading (minimum 4s) {
      <br>
      <p class="font-semibold text-gray-500">Loading comments...</p>
      }
    </div>
  `,
  imports: [Practica10BComponent],
})

export class Practica10AComponent {}
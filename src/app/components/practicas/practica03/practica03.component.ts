import {Component} from '@angular/core';

@Component({
  selector: 'app-username',
  template: `
    Username: {{ username }}
  `,
})
export class UserNameComponent {
  username = 'xkis_';
}

@Component({
  selector: 'app-practica03',
  template: `
    <section>
      <app-username/>
    </section>
  `,
  imports: [UserNameComponent],
})
export class Practica03Component {}

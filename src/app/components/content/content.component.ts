import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Practica01Component } from '../practicas/practica01/practica01.component';
import { Practica02Component } from '../practicas/practica02/practica02.component';
import { Practica03Component } from '../practicas/practica03/practica03.component';
import { Practica04Component } from '../practicas/practica04/practica04.component';
import { Practica05Component } from '../practicas/practica05/practica05.component';
import { Practica06Component } from '../practicas/practica06/practica06.component';
import { Practica07Component } from '../practicas/practica07/practica07.component';
import { Practica08AComponent } from '../practicas/practica08/practica08a.component';
import { Practica08BComponent } from '../practicas/practica08/practica08b.component';
import { Practica09AComponent } from '../practicas/practica09/practica09a.component';
import { Practica09BComponent } from '../practicas/practica09/practica09b.component';
import { Practica10AComponent } from '../practicas/practica10/practica10a.component';
import { Practica10BComponent } from '../practicas/practica10/practica10b.component';
import { Practica11Component } from '../practicas/practica11/practica11.component';
import { Practica12AComponent } from '../practicas/practica12/practica12a.component';

@Component({
  selector: 'app-content',
  imports: [
    CommonModule,
    Practica01Component,
    Practica02Component,
    Practica03Component,
    Practica04Component,
    Practica05Component,
    Practica06Component,
    Practica07Component,
    Practica08AComponent,
    Practica08BComponent,
    Practica09AComponent,
    Practica09BComponent,
    Practica10AComponent,
    Practica10BComponent,
    Practica11Component,
    Practica12AComponent,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule
  ],
  standalone: true,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  @Input() hideAll = false;
  @Input() content: any;
  @Input() title: any;
  @Output() showAll = new EventEmitter<void>();
  onShowAll() {
    this.showAll.emit();
  }
  

  isLogin = true;
  isNameVisible = false;
  showError = false;
  errorMessage = '';
  
  onSubmitLogin() {
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const password = (<HTMLInputElement>document.getElementById('password')).value;
    const username = (<HTMLInputElement>document.getElementById('username'))?.value;
  
    if (!this.isLogin) {
      if (!email || !password || !username) {
        this.showError = true;
        this.errorMessage = 'Por favor, complete todos los campos.';
        setTimeout(() => {
          this.showError = false;
        }, 5000);
      } else {
        this.isLogin = true;
      }
    }
  
    if (this.isLogin && (!email || !password)) {
      this.showError = true;
      this.errorMessage = 'Por favor, complete ambos campos.';
      setTimeout(() => {
        this.showError = false;
      }, 5000);
    } else {
      this.showAll.emit();
    }
  }
  
  onRegister() {
    this.isLogin = false;
    this.isNameVisible = true;
  }
  onToggleForm() {
    this.isLogin = !this.isLogin;
    this.isNameVisible = false;
  }


  hardcode1= `
  import {Component} from '@angular/core';

  @Component({
    selector: 'app-practica01',
    template: \`
      Hello Universe
    \`,
    styles: \`
      :host {
        color: #a144eb;
      }
    \`,
  })

  export class Practica01Component {}
  `;
  hardcode2=`
  import {Component} from '@angular/core';

  @Component({
    selector: 'app-practica02',
    template: \`
      Hola {{ city }}, {{ 1 + 1 }}
    \`,
  })

  export class Practica02Component {
    city = 'Huauchinango';
  }
  `;
  hardcode3=`
  import {Component} from '@angular/core';

  @Component({
    selector: 'app-username',
    template: \`
      Username: {{ username }}
    \`,
  })
  export class UserNameComponent {
    username = 'xkis_';
  }

  @Component({
    selector: 'app-practica03',
    template: \`
      <section>
        <app-username/>
      </section>
    \`,
    imports: [UserNameComponent],
  })

  export class Practica03Component {}
  `;
  hardcode4=`
  import {Component} from '@angular/core';

  @Component({
    selector: 'app-practica04',
    template: \`
      @if (isServerRunning) {
      <span>El servidor se esta ejecutando</span>
      } @else {
      <span>El servidor no se esta ejecutando</span>
      }
    \`,
  })

  export class Practica04Component {
    isServerRunning = true;
  }
  `;
  hardcode5=`
  import {Component} from '@angular/core';

  @Component({
    selector: 'app-practica05',
    template: \`
      @for(user of users; track user.id) {
      <p>{{ user.name }}</p>
      }
    \`,
  })

  export class Practica05Component {
    users = [
      {id: 0, name: 'Sarah'},
      {id: 1, name: 'Amy'},
      {id: 2, name: 'Rachel'},
      {id: 3, name: 'Jessica'},
      {id: 4, name: 'Poornima'},
    ];
  }
  `;
  hardcode6=`
  import {Component} from '@angular/core';

  @Component({
    selector: 'app-practica06',
    styleUrls: ['app.component.css'],
    template: \`
      <div [contentEditable]="isEditable"></div>
    \`,
  })

  export class Practica06Component {
    isEditable = true;
  }
  `;
  hardcode7=`
  import {Component} from '@angular/core';

  @Component({
    selector: 'app-practica07',
    template: \`
      <section (mouseover)="onMouseOver()">
        Aqui hay un mensaje secreto, pasa el cursor para revelarlo:
        {{ message }}
      </section>
    \`,
  })
  export class Practica07Component {
    message = '';

    onMouseOver() {
      this.message = 'Dieguito estuvo aqui 😶‍🌫️';
    }
  }
  `;
  p08= 0;
  switch_p08a() {
    this.p08= 0;
  }
  switch_p08b() {
    this.p08= 1;
  }
  hardcode8a=`
  
  import {Component, Input} from '@angular/core';

  @Component({
    selector: 'app-practica08-a',
    template: \`
      <p>The user's name is {{ name }}</p>
    \`,
  })
  export class Practica08AComponent {
    @Input() name = '';
  }
  `;
  hardcode8b=`
  import {Component} from '@angular/core';
  import { Practica08AComponent } from './practica08a.component';

  @Component({
    selector: 'app-practica08-b',
    template: \`
      <app-practica08-a name="Diego"/>
    \`,
    imports: [Practica08AComponent],
  })

  export class Practica08BComponent {}
  `;
  p09= 0;
  switch_p09a() {
    this.p09= 0;
  }
  switch_p09b() {
    this.p09= 1;
  }
  hardcode9a=`

  import {Component, Output, EventEmitter} from '@angular/core';
  
  @Component({
    selector: 'app-practica09-a',
    styles: \`.btn {padding: 5px 15px 5px 15px; background: #c7c7c7; border-radius: 5px; cursor: pointer; transition: 0.4s;} .btn:hover {background: #b7b7b7;}\`,
    template: \`
      <button class="btn" (click)="addItem()">Add Item</button>
    \`,
  })
  
  export class Practica09AComponent {
    @Output() addItemEvent = new EventEmitter<string>();
  
    addItem() {
      this.addItemEvent.emit('🥶');
    }
  }
  `;
  hardcode9b=`
  import {Component} from '@angular/core';
  import { Practica09AComponent } from './practica09a.component';

  @Component({
    selector: 'app-practica09-b',
    template: \`
      <app-practica09-a (addItemEvent)="addItem($event)" />
      <p>🥶 all the way down {{ items.length }}</p>
    \`,
    imports: [Practica09AComponent],
  })

  export class Practica09BComponent {
    items = new Array();

    addItem(item: string) {
      this.items.push(item);
    }
  }
  `;
  p10= 0;
  switch_p10a() {
    this.p10= 0;
  }
  switch_p10b() {
    this.p10= 1;
  }
  hardcode10a=`

  import {Component} from '@angular/core';
  import { Practica10BComponent } from './practica10b.component';

  @Component({
    selector: 'app-practica10-a',
    template: \`
      <div>
        <h1>How I feel about Angular</h1>
        <article>
          <p>
            Angular is my favorite framework, and this is why.Angular has the coolest deferrable view
            feature that makes defer loading content the easiest and most ergonomic it could possibly
            be. The Angular community is also filled with amazing contributors and experts that create
            excellent content. The community is welcoming and friendly, and it really is the best
            community out there.
          </p>
        </article>

        @defer (on viewport) {
        <app-practica10-b/>
        } @placeholder {
        <p>Future comments</p>
        } @loading (minimum 4s) {
        <br>
        <p>Loading comments...</p>
        }
      </div>
    \`,
    imports: [Practica10BComponent],
  })
  export class Practica10AComponent {}
  `;
  hardcode10b=`
  import {Component} from '@angular/core';

  @Component({
    selector: 'app-practica10-b',
    template: \`
      <br>
      <ul>
        <li>1. Building for the web is fantastic!</li>
        <li>2. The new template syntax is great</li>
        <li>3. I agree with the other comments!</li>
      </ul>
    \`,
  })

  export class Practica10BComponent {}
  `;
  hardcode11=`
  import {Component} from '@angular/core';
  import {NgOptimizedImage} from '@angular/common';
  
  @Component({
    selector: 'app-practica11',
    template: \`
      <p>Username: {{ username }}</p>
      <p>Preferred Framework:</p>
      <ul>
        <li>
          Static Image:
          <img ngSrc="../assets/angular-icon.png" alt="Angular logo" width="32" height="32" />
        </li>
        <li>
          Dynamic Image:
          <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
        </li>
      </ul>
    \`,
    imports: [NgOptimizedImage],
  })
  export class Practica11Component {
    logoUrl = '../assets/angular-icon.png';
    logoAlt = 'Angular logo';
    username = 'xkis_';
  }
  `;
  p12= 0;
  switch_p12a() {
    this.p12= 0;
  }
  switch_p12b() {
    this.p12= 1;
  }
  switch_p12c() {
    this.p12= 2;
  }
  hardcode12a=`

  import {Routes} from '@angular/router';
  export const routes: Routes = [];
  `;
  hardcode12b=`
  import {Component} from '@angular/core';
  import {RouterOutlet} from '@angular/router';
  
  @Component({
    selector: 'app-practica12-a',
    template: \`
      <nav>
        <a href="/">Home</a>
        |
        <a href="/user">User</a>
      </nav>
      <router-outlet />
    \`,
    imports: [RouterOutlet],
  })

  export class Practica12AComponent {}
  `;
  hardcode12c=`
  import {ApplicationConfig} from '@angular/core';
  import {provideRouter} from '@angular/router';
  
  import {routes} from './practica12c.component';
  
  export const appConfig: ApplicationConfig = {
    providers: [provideRouter(routes)],
  };
  `;








  //! //////////////////////////////////////////////
  rawCode: string = `
    function helloWorld() {
        console.log("Hola, mundo!");
    }
  `;

  highlightedCode: string = '';
  ngOnInit() {
    this.highlightedCode = this.rawCode
      .replace(/function/g, '<span class="text-blue-500"> functio</span>')
      .replace(/console/g, '<span class="text-green-500">console</span>')
      .replace(/"([^"]*)"/g, '<span class="text-red-500">"$1"</span>');
  }
}

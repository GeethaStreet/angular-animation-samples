import { Component } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  template: `
    <div class="container-fluid">
    <h3 style="font-weight:300;text-align:center;padding-top: 2rem;">Angular Animations</h3>
    </div>

    <div class="details">
      <h5> Why it's important:</h5>
      <ul>
        <li>Lets users know the application is responding.</li>
        <li>Can call user’s attention where necessary.</li>
        <li>Lets users know the application is responding.</li>
      </ul>
    <div>
  `,
  styles: [`

    ul {
      list-style-type: none;
    }

    .details {
      margin-top: 6rem;
      text-align: center;
    }

    .container-fluid {
      background-image: url("https://orig00.deviantart.net/e358/f/2012/254/7/1/dance__04_by_fredobizarrte-d5eejnj.gif");
      background-repeat: no-repeat;
      background-size: cover;

      width: 800px;
      height: 600px;
    }
  `], 
  animations: [
    // ANIMATIONS GO HERE!
    trigger('showThings', [
      state('rest', style({
        opacity: 0
      })),
      state('hover', style({
        opacity: 1
      })),
      transition('rest => hover', animate('800ms')),
    ])
  ]
})
export class HomeComponent {
  currentState = 'rest';

  setState(state) {
    this.currentState = state;
  }
}
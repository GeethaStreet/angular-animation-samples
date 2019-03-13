import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger, useAnimation } from '@angular/animations';
import { fadeIn, fadeInWithParams } from '../animations';

@Component({
  template: `
        <div class="container-fluid">
            <h3 style="font-weight:300;text-align:center;padding-top: 2rem;">Other Cool Stuff We Can Do</h3>
            <div class="row align-items-center">
                <div class="col-12">
                <div [@enter]="spoons.length">
                <ul *ngFor="let spoon of spoons">
                    <li class="spoon-block d-flex justify-content-center"></li>
                </ul>
            </div>
                </div>
            </div>
            <hr/>
            <button class="btn btn-primary" (click)="showDancers()">Show Dancers</button>

        </div>
  `,
  styles: [`.spoon-block {
    float:left;
    width:22%;
    height:140px;
    background-color: antiquewhite;
    background-image: url("https://orig00.deviantart.net/e358/f/2012/254/7/1/dance__04_by_fredobizarrte-d5eejnj.gif");
    background-repeat: no-repeat;
    background-size: cover;
    color: #440000;
    margin: 4px;
    display:flex;
    align-items:center;
    display:block;
  }`],

  animations: [
    // https://angular.io/guide/reusable-animations#reusable-animations
    trigger('fadeIn', [
      transition('* => *', [
          useAnimation(fadeIn)
      ])
    ]),
    trigger('fadeWithParams', [
      transition('* => *', [
        useAnimation(fadeInWithParams, {
            params: { delay: '1000ms', from: 0, to: 1, time: '1s' }
        })
      ])
    ]),
    trigger('enter', [
      // ENTER / LEAVE - Keyword is short for (void => *), * => void
      // Query - finds elements 
      // Stagger - Cascading Delay
      //https://angular.io/guide/complex-animation-sequences#complex-animation-sequences
      transition('* => *', [
          query(':enter', style({ opacity: 0 }), { optional: true }),
          query(':enter', stagger('200ms', [
            animate('1s', style({ opacity: 1 }))
        ]), { optional: true })
      ])
    ])
  ]
})

export class AdvancedComponent {
  spoons = [];
    showDancers() {
      this.spoons = Array(25).fill(0);
    }

    clearDancers() {
      this.spoons = [];
    }
}

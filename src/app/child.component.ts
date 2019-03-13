import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes, group } from '@angular/animations';

@Component({
  selector: 'child',
  template: `
      <div class="content" [@myTrigger]="currentState" (@myTrigger.start)="animationBegin($event)" (@myTrigger.done)="animationEnd($event)"> </div>
      <p class="msgbox">my state: {{msg}}</p>
    `,

  styles: [`
    .content {
        background-color: #47748f;
        background-image: url("https://i.pinimg.com/236x/3d/3c/69/3d3c69dcceed4ed6df7c6b629adc562b--black-white.jpg");
        background-position: center;
        width: 200px;
        height: 200px;
    }
    .msgbox {
      margin: 2rem;
      padding-top:2rem;
      font-size: 1rem;
  }
  `],

  animations: [
    trigger('myTrigger', [
      state('rest', style({
        transform: 'scale(1)'
      })),
      state('basic-scale', style({
        transform: 'scale(1.8)'
      })),
      state('delay-easing', style({
        transform: 'scale(1.6)'
      })),
      state('keyframed', style({
        transform: 'scale(1.0) rotate(90deg)',
      })),

      transition('* => rest', animate('800ms')),
      transition('* => basic-scale', animate('200ms')),

      //ANIMATION METADATA - 'duration delay easing
      transition('* => delay-easing', animate('200ms 250ms ease-in-out')),
      
      //KEYFRAMES
      transition('* => keyframed', [
        animate('2000ms ease-in-out', keyframes([
            style({transform: 'scale(2.0) rotate(90deg)', offset: 0.5}),
            style({transform: 'scale(1.2) rotate(90deg)', offset: 0.9}),
        ])),
      ]),
    ])
  ]
})

export class ChildComponent {
  @Input() currentState;
  msg = 'rest';


  // MONITORING EVENTS  https://angular.io/guide/transition-and-triggers#animation-callbacks
  // Events callbacks include start, end, fromState, toState, totalTime, etc
  animationBegin(e) {
    console.log(e);
    this.msg = e.phaseName + ": " + e.fromState + " => " + e.toState + " [" + e.totalTime + "]";
  }

  animationEnd(e) {
    this.msg = e.phaseName + ": " + e.fromState + " => " + e.toState + " [" + e.totalTime + "]";
  }
}

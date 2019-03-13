import { Component } from '@angular/core';

@Component({
  template: `
    <h3 style="font-weight:300;">Basics</h3>
      <div class="container-fluid">
          <div class="row">
              <div class="col-5">
              <div class="btn-group-vertical" style="margin-top:1rem;">
                <a (click)="setState('basic-scale')" class="btn btn-primary">Basic Scale</a>
                <a (click)="setState('delay-easing')" class="btn btn-primary">With Delay & Easing</a>
                <a (click)="setState('keyframed')" class="btn btn-primary">With Keyframe Animation</a>
                <a (click)="setState('rest')" class="btn btn-secondary">Reset</a>
              </div>
              </div>
              <div class="col-7">
              <child [currentState]="switchstate"></child>
              </div>
          </div>
      </div>
      <div>
      <h6> Animation is transitioning from one state to another. </h6> 
      Angular has 3 states which an element can transition to and from.
      <li>
      Void:  not yet placed in the DOM , or removed from DOM  i.e. enter/exit
      </li>  
      <li>
      Wildcard :   * any style,  animation is applied regardless of current state.
      <li> 
      Custom:  user defined 
      <div>
    `,
  styles: [``]
})
export class ParentComponent {
  switchstate = 'original';

  setState(state) {
    this.switchstate = state;
    console.log(state);
  }
}
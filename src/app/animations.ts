import { animate, animation, style, query } from '@angular/animations';

// Reusable Animation Without Params
export const fadeIn = animation([
    style({
        opacity: "0"
    }),
    animate("800ms 300ms ease-in-out", style({
        opacity: "1",
    }))
])


// With Params
export const fadeInWithParams = animation([
  style({
      opacity: "{{ from }}"
  }),
  animate("{{time}} {{delay}} ease-in-out", style({
      opacity: "{{ to }}"
  }))
]);

export const slideAnimation = animation([
  style({ opacity: 0, position: 'absolute', left: 0, right: 0, transform: 'translate3d(-100%,0,0)' }),
  animate('400ms ease-in-out', style({ opacity: 1, transform: 'translate3d(0%,0,0)' })),
]);

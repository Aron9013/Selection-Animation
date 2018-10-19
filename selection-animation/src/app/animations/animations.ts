import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

export const Animations = {
  toggleText: trigger('toggleText', [
      state('open', style({
        height: '*'
      })),
      state('close', style({
        height: '0'
      })),
      transition('open <=> close', [
        animate(300)
      ])
    ]),

  toggleCard: trigger('toggleCard', [
    state('open', style({
      height: '*'
    })),
    state('close', style({
      height: '400px'
    })),
    transition('open => close', [
      animate(1000, keyframes([
        style({ height: '*', offset: 0 }),
        style({ height: '400px', offset: 0.3 }),
        style({ width: '100%', offset: 0.7 }),
      ]))
    ])
  ])
};

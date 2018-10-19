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
      height: '*',
      width: '*'
    })),
    state('close', style({
      height: '400px',
      width: '100%'
    })),
    transition('open => close', [
      animate(300)
    ])
  ]),

  hideCard: trigger('hideCard', [
    state('visible', style({
      opacity: '1',
    })),
    state('hidden', style({
      opacity: '0',
      transform: 'translateY(-50px)',
      height: '0',
      width: '0',
      display: 'none'
    })),
    transition('visible => hidden', [
      animate(600, keyframes([
        style({ opacity: 1, offset: 0 }),
        style({ opacity: 0, offset: 0.5 }),
        style({ transform: 'translateY(-50px)', offset: 0.5 }),
        style({ height: '*', offset: 0.5 }),
        style({ width: '*', offset: 0.5 }),
        style({ height: '0', offset: 1 }),
        style({ width: '0', offset: 1 }),
      ]))
    ])
  ]),

  expandCard: trigger('expandCard', [
    state('initial', style({
      width: '*'
    })),
    state('expand', style({
      width: '100%'
    })),
    transition('initial => expand', [
      animate(300)
    ])
  ]),
};

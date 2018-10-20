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
      display: 'none'
    })),
    transition('visible => hidden', [
      animate(300)
    ])
  ]),

  moveCard: trigger('moveCard', [
    state('start', style({
      position: 'relative',
      top: '*',
      left: '*'
    })),
    state('end', style({
      position: 'relative',
      top: '0',
      left: '0'
    })),
    transition('start => end', [
      animate(500, keyframes([
        style({top: '*', offset: 0}),
        style({left: '*', offset: 0}),
        style({top: '{{ cardYPosition }}', offset: 0.1}),
        style({left: '{{ cardXPosition }}', offset: 0.1}),
        style({top: '0', offset: 1}),
        style({left: '0', offset: 1}),
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

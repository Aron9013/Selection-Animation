import {animate, group, keyframes, state, style, transition, trigger} from "@angular/animations";

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
      group([
        animate('300ms linear', style({
          opacity: '0',
          transform: 'translateY(-50px)',
        })),
        animate('500ms 300ms linear', style({
          height: '0',
          width: '0',
          display: 'none'
        }))
      ])
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

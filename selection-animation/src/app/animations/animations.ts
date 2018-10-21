import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";

export const Animations = {
  toggleText: trigger('toggleText', [
      state('open', style({
        height: '*',
        opacity: '1',
        display: 'block'
      })),
      state('close', style({
        height: '0',
        opacity: '0',
        display: 'none'
      })),
      transition('open => close', [
        animate(300)
      ]),
      transition('close => open', [
        animate('300ms 600ms linear')
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
    ]),
    transition('close => open', [
      animate('300ms 900ms linear')
    ])
  ]),

  hideCard: trigger('hideCard', [
    state('visible', style({
      opacity: '1',
      display: 'block'
    })),
    state('hidden', style({
      opacity: '0',
      transform: 'translateY(-50px)',
      display: 'none'
    })),
    transition('visible => hidden', [
      animate(300)
    ]),
    transition('hidden => visible', [
      animate('300ms 600ms linear')
    ])
  ]),

  moveCard: trigger('moveCard', [
    state('start', style({
      position: 'relative',
      top: '*',
      left: '*',
      width: '*'
    })),
    state('end', style({
      position: 'relative',
      top: '0',
      left: '0',
      width: '100%'
    })),
    transition('start => end', [
      animate('600ms 300ms linear', keyframes([
        style({top: '*', offset: 0}),
        style({left: '*', offset: 0}),
        style({width: '*', offset: 0}),
        style({top: '{{ cardYPosition }}', offset: 0.1}),
        style({left: '{{ cardXPosition }}', offset: 0.1}),
        style({width: '100%', offset: 1}),
        style({top: '0', offset: 1}),
        style({left: '0', offset: 1}),
      ]))
    ]),
    transition('end => start', [
      animate(600, keyframes([
        style({position: 'absolute', offset: 0}),
        style({top: '0', offset: 0}),
        style({left: '0', offset: 0}),
        style({width: '100%', offset: 0}),
        style({top: '{{ cardYPosition }}', offset: 0.9}),
        style({left: '{{ cardXPosition }}', offset: 0.9}),
        style({width: '*', offset: 1}),
        style({top: '*', offset: 1}),
        style({left: '*', offset: 1}),
        style({position: 'relative', offset: 1}),
      ]))
    ])
  ]),

  expandContent: trigger('expandContent', [
    state('start', style({
      width: '0%',
      opacity: '0',
    })),
    state('end', style({
      width: '100%',
      opacity: '1',
    })),
    transition('start => end', [
      animate('400ms 500ms linear')
    ]),
    transition('end => start', [
      animate(300, keyframes([
        style({width: '100%', offset: 0}),
        style({opacity: '1', offset: 0}),
        style({width: '0%', offset: 1}),
        style({opacity: '0', offset: 1}),
      ]))
    ])
  ])
};

import { state, trigger, style, transition, animate, keyframes } from "@angular/animations";

export let fade = trigger('fade', [
    state('void', style({
      opacity: 0,
      transform: 'translateX(-20px)'
    //   fontSize: 22,
    //   borderBottomColor: 'red'
    })),
    transition(':enter', [
      animate(500)
    ]),
    transition(':leave', [
        animate('500ms ease-in-out', keyframes([
            style({
                offset: 0.2,
                opacity: 1,
                transform: 'translateX(20px)'
            }),
            style({
                offset: 1,
                opacity: 0,
                transform: 'translateX(-100%)'
            })
        ])
        )
    ])
  ]);
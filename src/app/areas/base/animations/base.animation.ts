import {trigger, state, animate, style, transition} from '@angular/core';

  // app content animation
export function appRouteTransition() {
  return trigger('appRouteTransition', [state('void', style({}) ),state('*', style({}) ),
        transition(':enter', [style({opacity:'1',transform: 'translateX(6%)'}),animate('1.4s ease-in-out', style({opacity:'1',transform: 'translateX(0%)'})) ]),
        transition(':leave', [ style({transform: 'translateX(0%)'}), animate('1.95s ease-in-out', style({transform: 'translateX(-100%)'}) )]) ]);
}        

// app slide menu animation
export function appSlideInOut (){
    return trigger('appSlideInOut', [state('in', style({transform: 'translate3d(0, 0, 0)' })),
        state('out', style({transform: 'translate3d(100%, 0, 0)' })),
        transition('in => out', animate('600ms ease-in-out')),
        transition('out => in', animate('500ms ease-in-out'))]);
}
// app Notification slide animation
export function appNotificationSlide (){
    return trigger('appNotificationSlide', [state('in', style({transform: 'translate3d(0, 0, 0)' })),
        state('out', style({transform: 'translate3d(-100%, 0, 0)' })),
        transition('in => out', animate('600ms ease-in-out')),
        transition('out => in', animate('500ms ease-in-out'))]);
}

// navigation slide menu animation
export function navigationSlideInOut (){
  return trigger('navigationSlideInOut', [state('in', style({width:'0',padding:'1px 0px 3px',color:'transparent'})),
        state('out', style({width:'220px',padding:'1px 0px 3px 0',color:'rgba(0, 0, 0, 0.89)'})),
        transition('in => out', animate('600ms ease-in-out')),
        transition('out => in', animate('500ms ease-in-out'))]);
}

// navigation left chevron animation
export function rotateLeft (){
  return trigger('rotateLeft', [state('in', style({transform:'rotate(0deg)' })),
        state('out', style({transform:'rotate(90deg)',opacity:'0' })),
        transition('in => out', animate('500ms ease-in-out')),
        transition('out => in', animate('500ms 500ms ease-in-out'))]);
}

// navigation right chevron animation
export function rotateRight (){
    return trigger('rotateRight', [state('in', style({transform:'rotate(0deg)',opacity:'0' })),
        state('out', style({transform:'rotate(90deg)',opacity:'1',margin:'0px 8px'})),
        transition('in => out', animate('700ms 400ms ease-in-out')),
        transition('out => in', animate('500ms ease-in-out'))]);
}

// navigation right Chevron animation (adjustment- width ) 
export function slideChevronBox (){
  return trigger('slideChevronBox', [state('in', style({width:'0'})),state('out', style({width:'auto'})),
        transition('in => out', animate('600ms ease-in-out')),
        transition('out => in', animate('500ms ease-in-out'))]);
} 

//App content slide      
export function slideContentBox(){
  return trigger('slideContentBox', [state('in', style({margin:'0 0 0 40px'})),
        state('out', style({})),
        transition('in => out', animate('600ms ease-in-out')),
        transition('out => in', animate('500ms ease-in-out'))]);
}

// App submenu chevron rotation
export function chevronRotation(){
    return trigger('chevronRotation', [state('0', style({transform:'rotate(0deg)' })),
        state('1', style({transform:'rotate(180deg)'})),
        transition('0 => 1', animate('700ms 400ms ease-in-out')),
        transition('1 => 0', animate('700ms ease-in-out'))]);
}

//App submenu list fade animation
export function listFadeInDown(){
    return trigger('listFadeInDown', [state('0', style({transform:'rotate(0deg)' })),
        state('1', style({transform:'rotate(180deg)'})),
        transition('0 => 1', animate('700ms  ease-in-out')),
        transition('1 => 0', animate('700ms ease-in-out'))]);
}

function slideToRight() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%'}) ),
    state('*', style({position:'fixed', width:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
    ])
  ]);
}

function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%'}) ),
    state('*', style({position:'fixed', width:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateX(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ])
  ]);
}

function slideToBottom() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%', height:'100%'}) ),
    state('*', style({position:'fixed', width:'100%', height:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateY(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(100%)'}))
    ])
  ]);
}

function slideToTop() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%', height:'100%'}) ),
    state('*', style({position:'fixed', width:'100%', height:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateY(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(-100%)'}))
    ])
  ]);
}

export function slideInOutAnimation (){    // trigger name for attaching this animation to an element using the [@triggerName] syntax
   return trigger('slideInOutAnimation', [

        // end state styles for route container (host)
        state('*', style({
            // the view covers the whole screen with a semi tranparent background
            // position: 'fixed',
            // top: 0,
            // left: 0,
            // right: 0,
            // bottom: 0,
            // backgroundColor: 'rgba(0, 0, 0, 0.8)'
        })),

        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({
                // start with the content positioned off the right of the screen, 
                // -400% is required instead of -100% because the negative position adds to the width of the element
                right: '-400%',

                // start with background opacity set to 0 (invisible)
                // backgroundColor: 'rgba(0, 0, 0, 0)'
            }),

            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to 0 which slides the content into view
                right: 0,

                // transition the background opacity to 0.8 to fade it in
                // backgroundColor: 'rgba(0, 0, 0, 0.8)'
            }))
        ]),

        // route 'leave' transition
        transition(':leave', [
            // animation and styles at end of transition
            animate('.5s ease-in-out', style({
                // transition the right position to -400% which slides the content out of view
                right: '-400%',

                // transition the background opacity to 0 to fade it out
                // backgroundColor: 'rgba(0, 0, 0, 0)'
            }))
        ])
    ]);
  }
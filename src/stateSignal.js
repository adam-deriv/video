import { createEffect } from 'solid-js';
import { interpret } from 'xstate';
import { appMachine } from './state';

export const { send } = interpret(appMachine).onTransition(currentState => {
    createEffect(() => {
        const joinedState = currentState.toStrings().join(' ');
        const app = document && document.querySelector("body");
        app && app.setAttribute("data-state", joinedState);
    });
}).start();

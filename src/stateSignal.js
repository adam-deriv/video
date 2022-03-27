import { createSignal, onCleanup, createEffect } from 'solid-js';
import { useEffect, useState } from 'react';
import { interpret } from 'xstate';
import { stateMachine } from './state';

export const [state, setState] = createSignal('');

export const { send } = interpret(stateMachine).onTransition(currentState => {
    createEffect(() => {
        const joinedState = currentState.toStrings().join(' ');
        const app = document && document.querySelector("body");
        app && app.setAttribute("data-state", joinedState);
        setState(joinedState);
    });
}).start();

const [windowWidth, setWindowWidth] = createSignal();

const screenSizesEnum = {
    screen4k: {
        width: 2560,
        name: 'screen4k',
    },
    laptopL: {
        width: 1440,
        name: 'laptopL',
    },
    laptop: {
        width: 1024,
        name: 'laptop',
    },
    tablet: {
        width: 768,
        name: 'tablet',
    },
    mobileL: {
        width: 425,
        name: 'mobileL',
    },
    mobileM: {
        width: 375,
        name: 'mobileM',
    },
    mobileS: {
        width: 320,
        name: 'mobileS',
    },
};
const checkWidth = () => {
    if (window.outerWidth >= screenSizesEnum.screen4k.width) {
        setWindowWidth(screenSizesEnum.screen4k.name);
    }
    if (window.outerWidth >= screenSizesEnum.laptopL.width && window.outerWidth < screenSizesEnum.screen4k.width) {
        setWindowWidth(screenSizesEnum.laptopL.name);
    }
    if (window.outerWidth >= screenSizesEnum.laptop.width && window.outerWidth < screenSizesEnum.laptopL.width) {
        setWindowWidth(screenSizesEnum.laptop.name);
    }
    if (window.outerWidth >= screenSizesEnum.tablet.width && window.outerWidth < screenSizesEnum.laptop.width) {
        setWindowWidth(screenSizesEnum.tablet.name);
    }
    if (window.outerWidth >= screenSizesEnum.mobileL.width && window.outerWidth < screenSizesEnum.tablet.width) {
        setWindowWidth(screenSizesEnum.mobileL.name);
    }
    if (window.outerWidth >= screenSizesEnum.mobileM.width && window.outerWidth < screenSizesEnum.mobileL.width) {
        setWindowWidth(screenSizesEnum.mobileM.name);
    }
    if (window.outerWidth >= screenSizesEnum.mobileS.width && window.outerWidth < screenSizesEnum.mobileM.width) {
        setWindowWidth(screenSizesEnum.mobileS.name);
    }
};
createEffect(
    () => {
        console.log('windowWidth() ',window.outerWidth)
        if (windowWidth() === screenSizesEnum.screen4k.name) {
            send("GO_SCREEN4K");
        }
        if (windowWidth() === screenSizesEnum.laptopL.name) {
            send("GO_LAPTOP_L");
        }
        if (windowWidth() === screenSizesEnum.laptop.name) {
            send("GO_LAPTOP");
        }
        if (windowWidth() === screenSizesEnum.tablet.name) {
            send("GO_TABLET");
        }
        if (windowWidth() === screenSizesEnum.mobileL.name) {
            send("GO_MOBILE_L");
        }
        if (windowWidth() === screenSizesEnum.mobileM.name) {
            send("GO_MOBILE_M");
        }
        if (windowWidth() === screenSizesEnum.mobileS.name) {
            send("GO_MOBILE_S");
        }
        checkWidth();
        window.addEventListener("resize", checkWidth);
    });

onCleanup(() => {
    window.removeEventListener("resize", checkWidth);
});
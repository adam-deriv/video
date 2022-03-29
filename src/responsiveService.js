import { createMachine, interpret } from "xstate";
import { createEffect } from "solid-js";


const responsiveMachine = createMachine({
    id: "responsive",
    states: {
        desktopLaptopL: {},
        desktopLaptopM: {},
        desktop4k: {},
        mobileL: {},
        mobileM: {},
        mobileS: {},
        mobileTablet: {},
      },
      on: {
        GO_LAPTOP_L: {
          target: "#responsive.desktopLaptopL",
        },
        GO_LAPTOP: {
          target: "#responsive.desktopLaptopM",
        },
        GO_SCREEN4K: {
          target: "#responsive.desktop4k",
        },
        GO_MOBILE_L: {
          target: "#responsive.mobileL",
        },
        GO_MOBILE_M: {
          target: "#responsive.mobileM",
        },
        GO_MOBILE_S: {
          target: "#responsive.mobileS",
        },
        GO_TABLET: {
          target: "#responsive.mobileTablet",
        },
      },
});

export const responsiveSerivce = interpret(responsiveMachine).onTransition(currentState => {
    createEffect(() => {
        const joinedState = currentState.toStrings().join(' ');
        const app = document && document.querySelector("body");
        app && app.setAttribute("data-responsive", joinedState);
    });
}).start();
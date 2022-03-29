import { createMachine, interpret } from "xstate";
import { createEffect } from "solid-js";


const responsiveMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QCc4AcD2A7WBLAbmAMQDiA8gPoAyAggAoAqZd1iomeALrtmyAB6IALACYANCACeiAIwyhAOgDMABiUBOAGwqh6kQFYlQtQF8TE1LEw4CxctXpM6fDrm68kA4eKmzNI5TV1JUMADmDNXSEzC3RsPEJSSgBlAGEAJQBRTIA5IQBpFwwuHiw+QQRRCWkEERkVQI16kVDNGXV9UOjzEEtrBLtKAFkyACEASSpM1k9XdzLPCqrfWs7G0ND9GVDVEU0Adn0Y3ribRPsRiamKIaKSj1AlnxrVTXXtFX31Tf3NTWO+vFbEkbmNJtNknc3KVyt5qogQopVEodrpfpoNvp-j1AWdBhQGDRRlMGFD5rDKs9EH9Gt99PoOvs1DIRGYelgMBA4HxcQMFFzYABrTgYNBUACGaBFYrJMMWiBEKgCLP0KhUmg0GyETKU8IQLIami2HS2QlU6i+rJxpz5AuFoolUtFt1mxWhDy8tSVChVao13y6Or1MgxCiN7VUQT0GyUAJttn5cHtaCEgtlHoqiuVBj9msDaj1dTe4fUOgihwtsetViBhAUAFsMAAjXAAGzAVHTC0eCu9vvVee1BZWe0U4dCXx2IVLBzjNbxDebbbALvYbvJ8q92dVA4DQ91KyULLDW022tUohkR2r-QTjZb7chrvu3c9WZ9Od3WqDh+0J+2IhaCI+wGAYc63nW97Lgw4pNu2nBdhS779v637DjUIH-t8SpCP4BxKuBtZgIhm7bHqAC02xhloOgYqWhz1OqbImEAA */
createMachine({
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
      target: ".desktopLaptopL",
      internal: false,
    },
    GO_LAPTOP: {
      target: ".desktopLaptopM",
      internal: false,
    },
    GO_SCREEN4K: {
      target: ".desktop4k",
      internal: false,
    },
    GO_MOBILE_L: {
      target: ".mobileL",
      internal: false,
    },
    GO_MOBILE_M: {
      target: ".mobileM",
      internal: false,
    },
    GO_MOBILE_S: {
      target: ".mobileS",
      internal: false,
    },
    GO_TABLET: {
      target: ".mobileTablet",
      internal: false,
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
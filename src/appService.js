import { createMachine, interpret } from 'xstate';
import { useEffect } from 'react';

export const appMachine =
    /** @xstate-layout N4IgpgJg5mDOIC5QEMAOqB0sCWUB2ArpthADZgDEAygCoBKA8gHIDiioqA9jgC7ad52IAB6IALAA4ArBgCcAJgUBGAAzylAdgDMqrQDYANCACeiALTqtGeRL2zZYm0rFTpWgL7ujaTDnxFqAEkWJgB9AFUABSEuXn5BJBFEJT0xDC1ZLS15DKlZCUcJI1MEMy0xKzy1FSUtCQklHPlPb3QsXEJUChYGUIAZBhZAphjubD4BIVFS+UU5fM0bCS0VVKli8yUFDGklKQz5Rz0pdQ0WkB92-y7AgBE+gFFRuMnE6bE9eR2tVyyxFLsKgqG1K2RkPykYg0LjsCg8XgubVInCg2Dw3V6VGCTCiz3G8Sm5hOGDEKg0em0KhUUlqknk6xM5nKeh2ZKkUjULg0e2050uyNR6IAwgAJB5CgDSoUiAEEqFQAOoMOi3PETBKgaZmYmk8mU6m0iT0kFlBysjQnGmOSF6VJ8toANxIYE4GAARgAnTgAd1glCFdAeMpoT0SsXxr014kc6Qk2ihqwtUj0ShBFQkGEavzqSgk+UyUntmCdEBdGGQAGMeJwPRjQgA1BiBIWhjhjdWEhB2DCpXMrLZG+SpMQg2S2kmKWxZrIqCRFjAlsuV6u1nqhABCMslLEY4SYqrD7YJb0Q3d7yxq+Vmw5BqmcE9kGmhn3k5J+88XruXNbrMr62IAWQeJgaDVY8oy7WQe3+C8B2vMQR0ZBBVE+B8GlUD4x0fD9nS-KsfzXW4HioANAkiGhAmYMDIySBA6isIEFBpCkHBpHJR3UB8NHsDR6UyekcNLPCV1-IUaGVaiNVos8YP7K8hwQ28lFUNCoShZTyUEpd8NrKgZXrVsQHDDsTwQBCvjqeMNETdkUzTWxM3pCRZ25Vx5BUeFWmLXDyx0244ArD1sFQdVqH0wzjPA2jymgvtL0HYdEJKPVHKkDRlhTIcaU8xFvKE3yK04Ag8B4OtIkYAAxQJHkkzsti+FQHAcON7C0bjFKQn4rHpY54Jqakci0vDCuK0q13Xar-1YWrTPqjBGrEZruMydqksQFYZB6yRPj2PNZA8oaCqKkqyr6GURkPF4pOmOaFqW1rVrTGprGTRaLX0TIUyGut10YBUqAio8aPeWLYPkxL7K+faCgTLYaXZb61y3cS6BmiC0nPOSEoQtbkJ0EkTg+XjeJ+aREd6LchQYPdQMuiNrvEUGsfgjqSkUL4LVSWx1FcewDoRS4-DwNEoCCEIHgPNsrs7MxVCghDjg8iplHZeQ0xZT4-lqBwPOwgW2grAALMAKwAaxFsWwmGNHaNmGQ9DJI0jlJco1aQ7UKnSBx3MhC80qUecjZN828FFhVGFYaU5UVZVJaMoGGZmOZ7AaXj6hWNYTUhKDlL2VRtCd-JPARPBOFLeBEkFjoiAwEhyBt94VjkP5oV1fbnBNRRwXZSR7Bpck9DnfXfGr3weC9UPImQWBYG9GsIAb6MvjjFwdB0AprP2E1ahUTMyRsZNGra3N5yFohF7M1Zm-KVuyXb3GzH+XeIQQ1X9pqIevIwAU0VrsgwAvo-ak6QLS2GkKnPMGgTSODSEaY4HIXA41WPOH+eAMDegnlAKeM854egXnTEyEFH6cXsLaVYzhbBQjdiUCwBR5r0nUjfWQKQUEojRIA1+8wyEpm2lQ6Bj4dhZXUP8H4WwPiHU9D6P0F887zRSEaOKHJyhaHslBLavEKhtQpCw4eC4fLfg9L5FcF96QaB7EOQ4FpFCrFWEpFIGAnxPjHI1BQegcqXE-EYmsC5ODYArAAghUVpimPMZ8KEJx9oO0MEhR8HMnzOXyA0XIAddGeIMeWUgHQAC2YASomLSqEyxESbHRJKChDMjjdi8SpKoZoqT9E6XdJWU2UAvTFXwVLemnYQmfDCVYyJtikK1N3o49KUJ0rXhSV-NJOkL4uCZvFFmuN6hKC4tSbk6gPJ1OmQ0lc-lYCBWCoQ+O0tTKvXSB8Wo7IMg3OoYgBQaRD5QjqJ8K0n9cp6PypWEaJUMCoC9AAM2wPXQJwN1r6B7KoX4edITUhBD8KCDsXDVHXu8jxDSfk8HdMCzJocL5ZA1lC5YMLSQMhKDoVZSKaQpH7ByNKh1vnHSxagUgyApKRTBXRCFKZqTEvhqSp6ZikWLXUHGQs9SvkVkxTIwe80mqSGWm1BwuNZi7y2vsXiyrFp6CGoArY6RXApHyDUJ8EJSniBZC4Q4N9pD7QQjor+QsRaAOEfMVOSwM4uFvPSdIVIPjuRcI+bkOrdFBzNs60FidtYOM0NkWoyiiZZzavNS5sh9ivjyJIIsHDuykKiRQ1IvETQvkzMpSQRrtA2BDZ4IAA */
    createMachine({
  id: "app",
  initial: "login",
  states: {
    signup: {
      initial: "idle",
      states: {
        idle: {
          on: {
            STRONG: {
              target: "strongPassword",
            },
          },
        },
        strongPassword: {},
      },
      on: {
        SIGN_UP: {
          target: "signing",
        },
        GO_LOGIN: {
          target: "login",
        },
        IDLE: {
          target: ".idle",
        },
      },
    },
    login: {
      initial: "idle",
      states: {
        idle: {},
        wrongPassword: {},
      },
      on: {
        GO_SIGNUP: {
          target: "signup",
        },
        CHECK_PASSWORD: {
          target: "checking",
        },
      },
    },
    video: {
      initial: "browse",
      states: {
        browse: {
          on: {
            CREATE: {
              target: "actor",
            },
          },
        },
        actor: {
          initial: "alignment",
          states: {
            actor: {},
            voice: {},
            alignment: {},
            background: {},
          },
          on: {
            GO_VOICE: {
              target: ".voice",
            },
            GO_BACKGROUND: {
              target: ".background",
            },
            GO_ALIGNMENT: {
              target: ".alignment",
            },
            GO_DESCRIPTION: {
              target: "actorDescription",
            },
            GO_ACTOR: {
              target: ".actor",
            },
            SAVE: {
              target: "browse",
            },
          },
        },
        actorDescription: {
          on: {
            SAVE: {
              target: "actor",
            },
          },
        },
        account: {
          initial: "profile",
          states: {
            profile: {},
            billing: {},
            plan: {},
          },
          on: {
            GO_PROFILE: {
              target: ".profile",
            },
            GO_BILLING: {
              target: ".billing",
            },
            GO_PLAN: {
              target: ".plan",
            },
          },
        },
      },
      on: {
        GO_BROWSE: {
          target: ".browse",
        },
        GO_ACTOR: {
          target: ".actor",
        },
        GO_ACCOUNT: {
          target: ".account",
        },
      },
    },
    signing: {
      on: {
        SIGNED: {
          target: "video",
        },
      },
    },
    checking: {
      on: {
        SIGN_IN: {
          target: "signing",
        },
        WRONG_PASSWORD: {
          target: "#app.login.wrongPassword",
        },
      },
    },
  },
});

export const useAppService = () => {
  useEffect(() => {
    appService.onTransition(currentState => {
      const joinedState = currentState.toStrings().join(' ');
      const app = document && document.querySelector("#app");
      app && app.setAttribute("data-app", joinedState);
    }).start();
  }, []);
};


export const appService = interpret(appMachine);
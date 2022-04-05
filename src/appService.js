import { createMachine, interpret } from 'xstate';
import { useEffect } from 'react';

export const appMachine =
    /** @xstate-layout N4IgpgJg5mDOIC5QEMAOqB0sCWUB2ArpthADZgDEAygCoBKA8gHIDiioqA9jgC7ad52IAB6IATGIBsGAJwyALAA4AzAHYxigAwBWLdu0AaEAE9EAWgCMmixlWbJMxRYmSxFmRoC+no2kw58ImoASRYmAH0AVQAFIS5efkEkEURtVRsJDwlNRUdNCSNTBEsLaTsHJxc3D0VvX3QsXEJUChYGcIAZBhZgpjjubD4BIVFi3RkMbUcZCync0sLEVQnl5RztVwstXNqfED9GwJbggBEOgFF+hOHk0YkMC3cVBUlNeU1VbXlVReKrG3KjmcUmqXj2B1InCg2DwrXaVFCTBiV0GiRG5jEmk0GCx2gs6lK2mUykkhhM5ke8gwmIqwM2NTq+wakOhsIAwgAJc5sgDS4WiAEEqFQAOoMOgnFFDJKgUZmTHY3H4tyk4mk36WVzU+wyByvN6fMSMiFQmEUU4XKVo27mL4TOYzB0LcnFVRUwHKb5iZRieRrI3ghoANxIYE4GAARgAnTgAd1glDZdHOApol2S8VRN1l5ipYn0+K2+U0PqxMjJRS+impMjWJLc3t1u3qmBDEDDGGQAGMeJwo3DwgA1BjBNnpjgDaXo4qNjAqH2KVTKDaUmQ-F0WL0YVyk1SSReb6bG4Oh8Pd3v9trhABCAt5LEYkSYkozk+tOZnygm840S5Xh-XIoLGJKkd3kctwOcGR7GPVtT07Hs+wHAUOkRABZc4mBoK1sxST9v2JX9l0kVdAMQTcS23KQiRIpwv3kSRYIwNsO3PJCrxOc4qCTYJohoYJmBwmU8NmbE3BJYC-UUbQ3l0X5gWxMCq2sLZJHkJiWLPRDL3aO8aHFITp3lL850IxdiNI+TqKotTlMeRQ1I0+C2P7KgBUHccQEzKcbQQdx7UUaTFD9N1NwY34pmkMRa3yeRdEkUkwRbZjnO0k44C7KNsFQaVqHczzvPfESZOpYCSM9ZRpNkxR5NcVQHmotcVQLZQnPbLSu04Ag8B4AdokYAAxYJLVfa5hLlKx6sq6wphySQ1HkeQxF+VRPgatT8yXfcpAsNrWK7Trut6q9r2G1DWEM3zLA+DBptmaCHIWpbfmCqlnDUhKlocNZ1MDOD2oQw6er6joBT6Uas3Gikbru2bHrdZ6XXKdbKpkhiCRkPbOAHa9GBFKgCrfXC5Wiqkf3M-9wLIhB9Grd61HmsRQqWrHkLZfS6Euj95QUUyFz-EiAN+Jbq1WN5MXzKRAtZq87zZBgn2wiGfO50m+aIym11+b6bNRt5JHUNwmICPAYSgEIwnOF8JzGoy-W0W7ixFnRtorRB5FKGsfol7QpebJlMC7AALMAuwAazNi2Il6LmRMW2R5qmJm1k3JwNWJGw1GXNc8QYkjVCY4PQ4jvBzZFRhWH5IVRXFa2vKJqGxlySZpnu+ZJHTj3tW+vdooN6DWr+igujaSIlZtyGjIkGwHNehQtkcb6NSZmxywcJdFseCRdj2PBOHbeBkgOE2iAwEhyFj0YrGrOQlAZqSquUDVJtsD4sSXYLN2JAu-sOZosB4DGUu0RkCwFgLGPsEBL6IAqpMNIxIvhqR0FoeQz8bp2DsB8SqHs-RqGNk0Ig0C-hzi0KUHQX4k5xSkM-Dwr87DJ2AnIEsTEWQwjPmQMARCzCemrEqdIWhMQ+g1FoV+eochOFKOkRiv9WF4AwLGIBUAQFgIgVGKBysipyjtC3eYToO4uksH6UROcPYgXUCw00wlCrE1tEuHRjpW76KKPKDQxjywVXcDgrGkYYzxk4RomxfwlAYDiooUm+ZchYiUBFX2KMZKlAUJjX+mkEIXlSX2LheI5xKFyJ6Da2waobnzBMMCGg1I+lcAGZKKSXLMU4NgLs-iJ4qzwmYLJwVAq1gYs7QK8k842X0B8YCaRvjeNqcgUgTQAC2YAeqZJnjkrp+TxHyS-PVHceIsTem+B8MZ2lIzdjDlAGM3V1HNM0baBZnS8k9MKUBBcNkGK1mJCSUkeyLxcKkModWFNBZU3kviUCUh3gHk9LMKpAcUoAxculWAmVsotOsY3DOkwrDfDXO4dw6oiluFkFMPci5dBM0cHsoGPAMCoBjAAM2wBfAJyL6rDLimuJ6D0VoOBRnINIkSIUHBqQdLqPVIy0smaXIhagHjLmZUuBGbKXQqDpsC94UhoL2EHtU1KZKKWkGQFYhu04JVMvxaynIK0sRxMCoFZY-s+WasFTwLhwFM6kLhvNBGy0XQkQdvTSq5Zch4l2sk08XDlBbB+QLSyLpYFi2yBBNwNqGgmzNpkt09i24zCce7KwXsZoOQ3t8aRyUi7h2TfSoy9VArWFeEScsHgqGZuKN-W6W1vQGwiboX6LYuHlTTXojUX1u7lk+FMX2kVvDeCAA */
    createMachine({
  on: {
    LOGOUT: {
      target: ".login",
    },
  },
  id: "app",
  initial: "video",
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
        IDLE: {
          target: ".idle",
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
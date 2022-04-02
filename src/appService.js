import { createMachine, interpret } from 'xstate';
import { useEffect } from 'react';

export const appMachine =
    /** @xstate-layout N4IgpgJg5mDOIC5QEMAOqB0sCWUB2ArpthADZgDEAygCoBKA8gHIDiioqA9jgC7ad52IAB6IATGIBsGAJwyALAA4AzAHYxigAwBWLdu0AaEAE9EAWgCMmixlWbJMxRYmSxFmRoC+no2kw58ImoASRYmAH0AVQAFIS5efkEkEURtVRsJDwlNRUdNCSNTBEsLaTsHJxc3D0VvX3QsXEJUChYGcIAZBhZgpjjubD4BIVFi3RkMbUcZCync0sLEVQnl5RztVwstXNqfED9GwJbggBEOgFF+hOHk0YkMC3cVBUlNeU1VbXlVReKrG3KjmcUmqXj2B1InCg2DwrXaVFCTBiV0GiRG5jEmk0GCx2gs6lK2mUykkhhM5ke8gwmIqwM2NTq+wakOhsIAwgAJc5sgDS4WiAEEqFQAOoMOgnFFDJKgUZmTHY3H4tyk4mk36WVzU+wyByvN6fMSMiFQmEUU4XKVo27mL4TOYzB0LcnFVRUwHKb5iZRieRrI3ghoANxIYE4GAARgAnTgAd1glDZdHOApol2S8VRN1l5ipYn0+K2+U0PqxMjJRS+impMjWJLc3t1u3qmBDEDDGGQAGMeJwo3DwgA1BjBNnpjgDaXo4qNjAqH2KVTKDaUmQ-F0WL0YVyk1SSReb6bG4Oh8Pd3v9trhABCAt5LEYkSYkozk+tOZnygm840S5Xh-XIoLGJKkd3kctwOcGR7GPVtT07Hs+wHAUOkRABZc4mBoK1sxST9v2JX9l0kVdAMQTcS23KQiRIpwv3kSRYIwNsO3PJCrxOc4qCTYJohoYJmBwmU8NmbE3BJYC-UUbQ3l0X5gWxMCq2sLZJHkJiWLPRDL3aO8aHFITp3lL850IxdiNI+TqKotTlMeRQ1I0+C2P7KgBUHccQEzKcbQQdx7UUaTFD9N1NwY34pmkMRa3yeRdEkUkwRbZjnO0k44C7KNsFQaVqHczzvPfESZOpYCSM9ZRpNkxR5NcVQHmotcVQLZQnPbLSu04Ag8B4AdokYAAxYJLVfa5hLlKx6sq6wphySQ1HkeQxF+VRPgatT8yXfcpAsNrWK7Trut6q9r2G1DWEM3zLA+DBptmaCHIWpbfmCqlnDUhKlocNZ1MDOD2oQw6er6joBT6Uas3Gikbru2bHrdZ6XXKdbKpkhiCRkPbOAHa9GBFKgCrfXC5Wiqkf3M-9wLIhB9Grd61HmsRQqWrHkLZfS6Euj95QUUyFz-EiAN+Jbq1WN5MXzKRAtZq87zZBgn2wiGfO50m+aIym11+b6bNRt5JHUNwmICPAYSgEIwnOF8JzGoy-W0W7ixFnRtorRB5FKGsfol7QpebJlMC7AALMAuwAazNi2Il6LmRMW2R5qmJm1k3JwNWJGw1GXNc8QYkjVCY4PQ4jvBzZFRhWH5IVRXFa2vKJqGxlySZpnu+ZJHTj3tW+vdooN6DWsZPBOHbeBkgOE2iAwEhyFj0YrGrOQlAZqSquUDVJtsD4sSXYLN2JAu-sOZosB4GNS+iZBYFgWM+wgOfEAqyY0mJL41J0LR5A3m67DsD5Ko9n6NQxsmhEAfn8OcWhSg6C-EnOKUgN4eC3r-DQ0kNCfSYiyGE08yBgHAWYT01YlTpC0JiH0GotBbz1DkJwpR0iMSPlgvAGBYznygJfa+t8oz32VkVOUdoW7zCdB3F0lg-RUJzh7EC6hMGmmEoVYmtolyCMdK3ERRR5QaAkboNwVgpBuixpGGM8Y8G8MUX8JQGA4qKFJvmXIWIlARV9ijGSpQFCYyPppBCF5vF9nwXiOcShcieg2tsGqG58wTDAugv0IIAzJS8S5ZinBsBdlMTbSGRkAnBUCrWBiztAryTzjZfQHxgJpG+IYpJyBSBNAALZgB6v4mwOTgn5I0DQ+SX56o7jxFib03wPhVO0pGbsYcoAxm6jwjJKs8JmGyUEvJoTOkbgXDZBitZiQklJMMi8+CpDKHVhTQWVN5L4lAlIRaug4o6IYQk1KF50qwEytlWZCjG4Z0mFYb4a53DuHVBEtwsgph7kXDo5Y-sDiJIOl1HqGBUAxgAGbYFnmYj59VylxTXE9B6K0HAozkGkex8SA4pQBt2IGPBIwotqaXcBagHjLixUuBGuKXQqDppc94UhoL2EHvc8lMKjrwtIMgeRDdpwMsxSCnFOQVpYhcYFQKELhmUvwcBTOUC4bzQRstF0JEHbvTcPYPe0EPECrDPg5QWwjkC0si6J+Ysk5M3GPmEB+Azb+LdCotuMx1HuysF7GaDklyLT3IXEO4dPVoqMvVQK1hXhEnLB4eB-rigH1ultb0Bs7HXNgvg8qPrhEakAd3XU+JliaGgtobw3ggA */
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
import { createMachine, interpret } from 'xstate';
import { useEffect } from 'react';

export const appMachine =
    /** @xstate-layout N4IgpgJg5mDOIC5QEMAOqB0sCWUB2ArpthADZgDEAygCoBKA8gHIDiioqA9jgC7ad52IAB6IATGIBsGAJwyALAA4AzAHYxigAwBWLdu0AaEAE9EAWgCMmixlWbJMxRYmSxFmRoC+no2kw58ImoASRYmAH0AVQAFIS5efkEkEURtVRsJDwlNRUdNCSNTBEsLaTsHJxc3D0VvX3QsXEJUChYGcIAZBhZgpjjubD4BIVFi3RkMbUcZCync0sLEVQnl5RztVwstXNqfED9GwJbggBEOgFF+hOHk0YkMC3cVBUlNeU1VbXlVReKrG3KjmcUmqXj2B1InCg2DwrXaVFCTBiV0GiRG5jEmk0GCx2gs6lK2mUykkhhM5ke8gwmIqwM2NTq+wakOhsIAwgAJc5sgDS4WiAEEqFQAOoMOgnFFDJKgUZmTHY3H4tyk4mk36WVzU+wyByvN6fMSMiFQmEUU4XKVo27mL4TOYzB0LcnFVRUwHKb5iZRieRrI3ghoANxIYE4GAARgAnTgAd1glDZdHOApol2S8VRN1l5ipYn0+K2+U0PqxMjJRS+impMjWJLc3t1u3qmBDEDDGGQAGMeJwo3DwgA1BjBNnpjgDaXo4qNjAqH2KVTKDaUmQ-F0WL0YVyk1SSReb6bG4Oh8Pd3v9trhABCAt5LEYkSYkozk+tOZnygm840S5Xh-XIoLGJKkd3kctwOcGR7GPVtT07Hs+wHAUOkRABZc4mBoK1sxST9v2JX9l0kVdAMQTcS23KQiRIpwv3kSRYIwNsO3PJCrxOc4qCTYJohoYJmBwmU8NmbE3BJYC-UUbQ3l0X5gWxMCq2sLZJHkJiWLPRDL3aO8aHFITp3lL850IxdiNI+TqKotTlMeRQ1I0+C2P7KgBUHccQEzKcbQQdx7UUaTFD9N1NwY34pmkMRa3yeRdEkUkwRbZjnO0k44C7KNsFQaVqHczzvPfESZOpYCSM9ZRpNkxR5NcVQHmotcVQLZQnPbLSu04Ag8B4DBUFIZBYTTAU0MM3y8WxZdgLSYksXsCtxF1SZ-Q2L53jxVrAzg9qEM67rev6waKAAMWTAq31w0YZOrEsrEkSr8zU9xfh9KkS1iuwGO9Ek2tYrs9p6vqBthaJGDGj9rpxZQ7oejZ5Gel01DEZb8jSFTZnSX6Oq6wHDthAUWEwtkAE1wbwjbJmkvcoJ0Ul5F+eQ3Ch-IErXV49Cx3acZ4AdQYYY7gktV9rmE0ZnGkQlPhqTQmq+X4HG0OciQY0kiVmMRVE57sAZ5q9r0F1DWDJsWpAeXcpg0GX1Dll09ypaTlw+X0fQ2GQtf+7neY6AU+mFrNRfI03JYtrRZfpl0dyVz18wctYlHUraUvagdr0YEUqHOkWjOi+2zL-EiAIi3QGvuvcfVCxmseQtl9LoY2MQUUyF3zyyXUZ6tVjeTF8ykQKq6vO82QYJ9sL9nyP3lRuf3M-9wLIhAHGUGzKpkhj1DcJiAjwGEoBCMJzhfCcs98sw-UV-0u70fd8wZ0oazj7vtF75smUwLsAAswC7ABrHe94iXo9c-LyCpLqZcHglzWCUBYDUxIbBqHAZ8TcCV8RMQ-l-X+eBd4ikYKwfkQpRTikPl5C6Acxi5EmNMWYVDJCwPhtqRee5oqSGWCWWCFAuhtEiKPI+-ts5MwcsFcC8MdiLw1BrGw5YHBLhAY8CQuw9h4E4O2eAyQDhbyIBgEg5AgFWGrHIJQag1KVSqsoDUVh6p2DsB8Sq8M-RqE3k0TRsAeAxiwdEZAsBYCxj7BAIBFVJgzWXAxdaWhw5FEsB8WwHwsRLmCpuYkmtE4aNQEAywc4tClB0F+C2cUpDmI8NEuwGtoZfmgptZKLIYRaLIGANJnobo6ELFoTEPoNRaGiXqHIThSjpEYonKpeAMCxjcVADxXifFRj8WPIqco7SUPmE6WhLpLB+k6WuL4wFPTqCYoMtJM0FmOhoeIjQ6zywVXcHYzm0Y4wJjSZuascVFA5xjtBN4NUXT6GRuLR2pQFBu0TppBCF5gV9n2TYYKgVawhMtoFKyUwbLt2MSCAMyUgUuWYpwbAXY6kzMuraCFShciejUrCj5QEVY2X0B8aaboklotSiC5ApAmgAFswA9XBXOIl0LSXbHJeRL89UdwTXyNsj47sQURm7N-KAMZurTN4ePPCZg8TcqhSS9u3T5ILkRYvYkJJSSSrBXish8p7pNyIrPNc8l8SgSkO8A8np1bGqjOlWAmVsrKsKvihAcDJhWG+Gudw7h1QbgkJIqYe5Fy6A1o4d2Os+oxgAGbYB0aa6cGtFJ0VUE4A0uoPjywoQ7EBJZyzyO0Am7mkY00sqwUArN24c15qDa8eenxqwlrzQ7BcVb9pA0GhgHgYBkCsqAZBB4GwdAO3xGXF6ShqTRShQxey0M+242BhgZNUYwC4qVbMxAwjqTgVDrMJ54TD3ehRpkMu0MILroOpu1AMZx2N19HkR056IqYmveBRepRHKAtSomvGnYYB4C7EUfdvqj3vtPV8XQF6F74mvXqb01hPQPoHcJH1ZC16TteLoNWqg50ujcDYIkqM3DBSFUlV+Sc-o610fkM2aQQ5W3zEh8WqHiT-Iki-A4ml6lbEtTPAuc9b6oeviWXN91K3JKaDvfZbpDnUPmMsoo8MxIxVmA5GR3x+nJXQT-JTGaT71UCtYQjOSPB5I0+YRJGAEGuBJNbIKCcWxpPKqppZGpGZRR1A6kN7xgLeG8EAA */
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
      initial: "actor",
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
            plan: {
              initial: "team",
              states: {
                team: {},
                free: {},
                pro: {},
                agency: {},
              },
              on: {
                TEAM: {
                  target: ".team",
                },
                FREE: {
                  target: ".free",
                },
                PRO: {
                  target: ".pro",
                },
                AGENCY: {
                  target: ".agency",
                },
              },
            },
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
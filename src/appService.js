import { createMachine, interpret } from 'xstate';
import { useEffect } from 'react';

export const appMachine =
    /** @xstate-layout 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-FHgZuxKd5Y-kIXw7nN+BcIwDf4uMy2ztsSjbUE4A0uoPi-E+NWGBNF1hyJ64XEOGAeBgBfZbS6tHXi6HgTBeurclDUkcvWkCjwVAQfvVBzeN2bW8ajGAWDwWpGICedSa9O5Zi4xZXD70S9MjkS6Rda729A4xie05X0eRHQo+VqOoknddS1lKHzYHd1Qd4+QDAPAXYigw6q-D4nuDke6FRwE-EGO9TemsJ6XHRcnsGf0zoGB+Ise-DcDYSnv3cis1eFVZbKFN4wqLcA1heD+eYOV3uXUeJHLHQhlqrYGWTF+JyRjqYJYtZLncHy-AMTw1bidD6nJ2I1bWF0GEz03wNfDIqdUj3Q3zAuyXaKok4rfSFM6WoDAPSe5hN4XzxCgq4KaW99G7Zt9VY6mwVMQp3hvBAA */
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
          initial: "actor",
          states: {
            actor: {},
            voice: {
              states: {
                asian: {},
                british: {},
                american: {},
              },
              on: {
                ASIAN: {
                  target: ".asian",
                },
                BRITISH: {
                  target: ".british",
                },
                AMERICAN: {
                  target: ".american",
                },
              },
            },
            alignment: {
              initial: "center",
              states: {
                center: {},
                left: {},
                right: {},
              },
              on: {
                CENTER: {
                  target: ".center",
                },
                LEFT: {
                  target: ".left",
                },
                RIGHT: {
                  target: ".right",
                },
              },
            },
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
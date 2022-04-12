import { createMachine, interpret } from 'xstate';
import { useEffect } from 'react';

export const appMachine =
    /** @xstate-layout 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-RjuJSVBW6gZ2sjXaxDdjpuXboxEfQE+8-TuFGa7aMcYEylrptWaOA97rjCxEoXuekHhSHiaUZiV8PpmTXTYbK+5axpoifuWO8klYaCoj6Vwz0g2CLMuhW8nYcBP1LZiBSzk1bvDWBsQC3l3Q7m+Puew7lwNoRvCOSMc8+CwFhUR7EfpFJkcupR9h1seHbmYtTVUtSsNLQ+ixsAnYhJzy7IR6ZJziO8dbeRpRVHEbLFWTuPEFdDwR34XU6TzGMI9pU2LdF6n+MUeYUJwOSgVi2I+HIOQUgUleJxjVCyUUrIYBHCJMAUZs4SD+aNZwK5dDjURniMo+nSjOCJIUpjEVLJ33IAAMx4GF-MGAqYlW1ToC+YFZFMUUrkfSEdoVVUnul-zd855QFhblqzvVwsFci8VmLMcdNWFEzRdQHwtgIW8zXBreBopta+WY8Q1guv5p66VxGEcBpKx9BHawE60ufW+rfCAtqBLIBgBa2bbS+q6AUqUe6dhPRUTgppOSU09wjb0puQN48zP9hWl9NaG1AucEhFGM78rjmOX6ddqiHiSxpse3Fn0L2lx2G3gaXbv39sA4nqD5BF3IclWh3duHCNrauHtNNb4SdI503R6tH6Cb2uoM9FD27sOHsk8DqWJHUg6YwVrBK0zPmrxEeYZ0qWNNFkbnxIrKQfpHBEgrWl6esBZ7z2+bjmZ+LJjFWWOkGYup-4IGBDqk+7ldAeMcKkyhMYsvYHtYzu4dhtJOz3DrpSSyEBHgluxcj5YjVjcF9VHxkY7f8QjWFp3R4w6u4NO76JV24k0XWGbK3sCn4YB4GAZAAls5jROq8XQbiYLMLwUoakA9YMgXLipVPoiMBZajGASz52ZmKTzJVncsxo6ZqKPdZQXCB6nxUuWSTX2fPB7r6gGMueOm+jyI6bvvdiNEiHrqWspRK6B7ChPuBnYYB4C7EUFvs42-Ug7wvjuDj8RcL1PpMOo+zzj4oWn4iGuT9lXzyVovp9fhuBsCvivXIemV4SQK3B1CCKxQpLQYpexRGPJAAvcA3VWMODWXtLYMXfOSXF0EqIBWGFSAvCOUkItfAF5M9KkJ0LdEFYOQeVSMqT0b4UAquSlRFcPB3cwAaejStIkatX0SFPFNQArViVwEkOxSObKRCUtOCfvCgq9DUe6fuHUApKYPSPubwbwIAA */
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
            background: {
              initial: "images",
              states: {
                images: {},
                colors: {},
                videos: {},
              },
              on: {
                IMAGES: {
                  target: ".images",
                },
                COLORS: {
                  target: ".colors",
                },
                VIDEOS: {
                  target: ".videos",
                },
              },
            },
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
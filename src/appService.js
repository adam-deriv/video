import { createMachine, interpret } from 'xstate';
import { useEffect } from 'react';

export const appMachine =
    /** @xstate-layout N4IgpgJg5mDOIC5QEMAOqB0sCWUB2ArpthADZgDEAygCoBKA8gHIDiioqA9jgC7ad52IAB6IATGIBsGAJwyALAA4AzAHYxigAwBWLdu0AaEAE9EAWgCMmixlWbJMxRYmSxFmRoC+no2kw58ImoASRYmAH0AVQAFIS5efkEkEURtVRsJDwlNRUdNCSNTBEsLaTsHJxc3D0VvX3QsXEJUChYGcIAZBhZgpjjubD4BIVFi3RkMbUcZCync0sLEVQnl5RztVwstXNqfED9GwJbggBEOgFF+hOHk0YkMC3cVBUlNeU1VbXlVReKrG3KjmcUmqXj2B1InCg2DwrXaVFCTBiV0GiRG5jEmk0GCx2gs6lK2mUykkhhM5ke8gwmIqwM2NTq+wakOhsIAwgAJc5sgDS4WiAEEqFQAOoMOgnFFDJKgUZmTHY3H4tyk4mk36WVzU+wyByvN6fMSMiFQmEUU4XKVo27mL4TOYzB0LcnFVRUwHKb5iZRieRrI3ghoANxIYE4GAARgAnTgAd1glDZdHOApol2S8VRN1l5ipYn0+K2+U0PqxMjJRS+impMjWJLc3t1u3qmBDEDDGGQAGMeJwoxgg5xsF3KELggK+hmBtL0cVsR50ooquk3jllL9Zm7bJoFKpFFpJJJFKpjcHQ+Hu73+4Ph5QAEJ0YI0YJUDlW7MpBDYpcaNx7-TKDIbryJIG6vGI2oKPuqjpJIVjaKerbnp2PZ9gOQ4jhQAoALLnI+bITu+MqftIJaqIeOSSPIShbOoYHaNidgKI4qgkkS8iIQOyGXn2cLhAAagwwRsumHDTtaObFI2GAqD6x7KBslJARuXoYK4pLkceFjyNMnFth2PFRnxd4CryLCMJETCSlO1zEXK0myRorGKdpykuhYxJUupOl2s4Mj2Hp3GoUZbThAKHSIrhTA0ERs7yoBMnEk5Clwa5Pzue8yhqVIRJwU4gEgYF7YXsFfEnOcVBJsE0TPswsU2ggszYm4JIeX6igMfIugbtk2VUVW1hbFRRUGaVoWmTQ4r1ZJ8UTI58kuTp6VFM4pJ9V1SiDYow2BkhxUoVe1ACvxokgJmM4Ne49r7rofputpIG-FM0hiLW+RddtpJgi2XH7YZJxwF2UbYKg0pHSd02fk11IeXBnrKB1bzde5riqA8OVASqBbKCNJVdpwBB4DwGCoKQyCwmmOGQ6MeLYgpHlpMSWL2BW4i6pM-obF87x4jju2-aN+OE8TpPkxQABiyanedEmfgx1YllYkgI-mVHuL8PpUiW712CB3okrjKFC0TJNk7C0SMNTqQ5DiyhKyrGzyOrLpqBBRL5Gkg2bhYhvdsbItm1hLDnEwbIAJpWwgvOTB15F+TopLyL88huLb+SHkBrx6L7Xb+3xFsMOLwSWjZWZ2Ygq0PBpUwaDu6hfL8DjaDJ7GHgBsxiCe-P6XjBNE8ZxcRawkeV4Snw1HX+ZJy65FUh1CkfL6PobDIOd56F0QdIRpcXZJo-VxPmMNy66kt56+bbWsSgcd357GYwIpUNL4kfvZCiJXJzmpUtT26OjyvkR9PdFOuM+ITSmjvWWb855JQWt-NyRQU7VlWG8TE+YpD7lAeNNkbIGCWRipA1+GJ37zS-kpZaiAHBZXUgjTqkh1BuE4gEPAMIoAhDCOcayYlbJxT9M3f0qC9BHnzMnUoNYr5oO0Bg5sTJMBdgABZgC7AAa1YewiIvQR7UVkMrGurFrA0Q1MSGwagFJATxCBOCXcfoKKUaovAbCRSMFYPyIUopxRcLOi-cuYxciTGmLMAJoEXRmE9BkHUahXC6mWCWRCFAuhtEiAQ7hZc4oSBsNtRQ1EFBbEcFQjUncbDlgcKxaijwJC7D2HgTg7Z4DJAOMwogGASDkBHjbOQShIntURuuEJVg0Z2DsB8BGTs-RqCYU0JpsAeAxgcdEZAsBYCxj7BASO8NJiMwUiBHmWhp5FEsB8bcQzWJZO0sSaxsjDjNEjpYGSWhSg6EAjXLqUgNTuAgoM-IrEPJyFifzFkMJmlkDADcz0CsdCFi0JiH0GotDbj1DkJwpRYKcQBXgDAsZZlQHmYs5ZUZVmEJ8WYO0-j5hOmCfss58LzFO08uoVFppiIyyIWMVipLHRBIKRoal5Z4buFGYbaMcYEw3O0tWD6r0U7jCxEoX+EFVoL1KMxHOV4Dp9huXiGSShcieiorXfcPUpjrQ0FRH0rgAw-R7mq68GEwCdhwOTG5mIMB+h0v5TKCdAJgTeNuXc+57BHguQcK1hl0K3kjMDPgsB5FOuxK635HqNhevcnYAEO4dLyVVDfS1QVVU3hHJ2AAtmAYGXZHWErSXGz0CbtZJpkBuZYyCdx4k+srJwKq0L5pBRWhqZhtHxvdbW5W9aMp+KYh9Y8R5s2XJDcFTspAmjFqJhqjJ2razbP1YoDcgE0bqVpvkT0gyO39gjN2ZRUAYyEwJSk3en5iWrv3OuvV2wt3uTkutKhxISSkmPU65WH9kqLQQRXfEXkpB+kcESe5x6AawCBiDW9zKfHGMmFYb4QF3DuHVO5dJsgpiaU+EuRta8+4ixjAAM2wK0ntklO7YiPB5PcaHlivAoQgI8c12KZXLBUhCt8-q51I5GKjC6HGRzo2pfKTGDS6g+L8QjZ8aLrFgSR4WptyYYB4GAZAhbI46RsLMV4ugiT4kARrJQ1JXqPpAo8FQPt+OCyE6LdF5GoxgG7TeqBiAdJ5gzTuWYH09nee9BzfIr1AF23LNO4NQV-bqfRagGMen36+jyI6QLT1nXu1S1Q0oO0c0Cbi85zsMA8BdiKJ5llPnqR+fS7dRu+JQtSF1N6awnpVMm2c3p+hDwNg6HnqZ5Wvw3A2Gy44XIS1XiSA6zwNp8qD61yPkFxqUgmt7l1HiV6Hlcagq2ABuB5DRFNamCWKRS53ATPwKwjVW4nTktEc1N6sxtqlO+NN-mtiVHXZo3etG-qHlEnLB4F5FLzDnIwKY1wJJ64dSyYhG5cN2WBPmKD4oKcXo6jSPoHj73vBAA */
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
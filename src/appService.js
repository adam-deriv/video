import { createMachine, interpret } from 'xstate';
import { useEffect } from 'react';

export const appMachine =
    /** @xstate-layout N4IgpgJg5mDOIC5QEMAOqB0sCWUB2ArpthADZgDEAygCoBKA8gHIDiioqA9jgC7ad52IAB6IALAA4ArBgCcAJgUBGAAzylAdgDMqrQDYANCACeiALTqtGeRL2zZYm0rFTpWgL7ujaTDnxFqAEkWJgB9AFUABSEuXn5BJBFEeXkrJVSXLSk9MT1nLSNTBDN0qz0VDRtZKQ1ZJS0JFTFPb3QsXEJUChYGUIAZBhZAphjubD4BIVEEPQwpebq6vS0VySzC83kpJQxtetk8rTElJVkjlpAfdv8uwIARPoBRUbjJxOn52cabMW0Vedq8g2xS0WwwWSkvxcdgUHi8lzapE4UGweG6vSowSYURe43iU0QUhUGBUKk0qly+nstikwLMoJkEMkYlkFWkUmqFyuSJRaIAwgAJR58gDSoUiAEEqFQAOoMOh3XETBKgaZmKTyDBiCp6P7-eqSLZ0rQODCNDQa7aOSF6HJcxHI1EUe5PJX497mE2ao7qOxSLLmoEmczMs0aCSnPISeTacPNeFXABuJDAnAwACMAE6cADusEofLojwlNGeiVieLeqvEjnBEm0vxUus+SmBYgaGHSrhWEYksj7WXtmGTEFTGGQAGMeJxM+jQgA1BiBPlljhjZUEmayDA5JQSLRk-spHJiYEHWaOft5LYrFQSIcYEdjyfT2c9UIAIQlopYjHCTEVct13dastx3Y590PaN5BPYFVGcLVFA0DRchSDRlikB8nzTF8ZznCU+ixABZR4mBoN0qySMDd0g05oNg4MEFUPRNUvCMKTsOwNCwlMcKnPD3zuR4qELQJIhoQJmAolUqIaKwmgUbZdQcbZUjPdRENkWotK2M4th40c+NffC+RoeVpM3OxwL3A86OPMRT0Yk5VE0iQoQ0E50IM59+NnKgJXnVcQArDcPQQBzvXrI4NCbC1slbRjJFmLtGnrJRXHkFQ4VaYdePHXy7jgCdM2wVBlWoAKgpCkDZLEazaKPGCHMcop0I0TstnDfR0j0bZsoRXLDPyidOAIPAeDnSJGAAMUCV0gNeGTplOTUVAcBx63sLRagc4EsisLZevssl-lSby+JGsaJvfD85sI1gLLClaSXWyRtO2hwWsQA8ZEOpL1FcewsvO4bRvGya+glEYFsrJbEGetaWTeradq+8KyWsbIWQtKluvOucP0YGUqCq4DKOmOqaNsxqTzRw05DvByYtObZ5nx99vzMuhHtAymIOp+jmrgnQtQ1XJKkqANMITNpsJMvkGH-ciYdC3n6oF+zdsYxRNQtHJbABvtWX6q4-DwVEoCCEJHkAtdFs3Eo1q1XIiSOL10o1NtZhY1Z9m1E1uJlzAJwACzACcAGsLatsJhh5qi92JDkdEaLKtMcJpjVNc1LWcLZcjtIOMFD8Oo7wS2ZUYVhxSlWV5Vt4Kybh4pMrqtR-XSllo21XU6XmTUFHkJKjlTjlPHhPBOFHeBElNjoiAwEhyHjimDzkVYUO1WoyTRixqnBeZJHsbZ0L0e8i7NhfYB4bNy8iZBYFgHMZwgFea01etMnqPdG39Ol6mJKoSo0hyhnA8ufHK1xOhv3RrMM40UHIVFZM4OkxxiRMnDE0I4Z8XAPh5KiReZAwAwLMM1cE21GgnDsDSQwjFSEaWyMoCoLJ6iDiLvgvAGAcy3ygPfR+z9MyvxVjVNUjgrA4wkAOXIvw6jGm2nMA4+RkIrFZPIPBjoZLVXJiGM+5DMFUKvNkPuVl6wRk+lFJQZ8QZZlzPmGB6UdhkjPuoSCrt2xtj7JjHIlR2zbV1JYkGuFMz5VfDAzqO4YJDwtIoJsTY4JUN2MhWooCFDLECb5R8nBsATmIcI7RCBwksRYr8DUrJyi0KKDpRJmD+wRhNNsdJr5xykA6AAWzAONMJNQInFOiWUuJTkmwSGqdITQmUTpqKLthEJM4MyTgjlAbMY0hF21hpuQpkSSkxPKXBNQxIklxmQvRJQjSZwwJcOrKCms0aSJ2JeWoNQNSWNyKczMhVYDFVKqrRu9swpY3BLkeo8wTQgqDJUoecxyi-AaCxK0ECBqPjypOS640MCoGzAAM2wMvPJzcVje1UN2BxkJ-h7Q5DuJoRJMop3hUmJFE4UU8AzNilp5cYH4p3IS-cxLtS0kYjoHYULtiWNskSGo6TGVotIMgTRTdNwcryP8blrNeVtgqBShyyh6zS0gdM5FYMeD2N0YjDa71UbAhSMSQ6bi9zqAcIHXVvESGnAPhGahZJlGfC9qLIebkoS6j7JCB8ZsLYkOkHMTKMZerHHKCcOkpo+rtg7poaRJs2gl0jqG3Fm5tQ7m0NkPIJw7xnAqeYIk7VeUxhNDZRotohwkJZN6ChZJLGGNLcUHIH9wynGSXeH2493BAA */
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
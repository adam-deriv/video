import { createMachine, interpret } from 'xstate';
import { useEffect } from 'react';

export const appMachine =
    /** @xstate-layout N4IgpgJg5mDOIC5QEMAOqB0sCWUB2ArpthADZgDEAygCoBKA8gHIDiioqA9jgC7ad52IAB6IAHADYxGAKwBOAMwB2GQoBMEuUoAsABhkAaEAE9EChboza5NrbsUyJCxQF8XRtJhz4i1AJIsTAD6AKoACkJcvPyCSCKIAIxqSRhiamIJCmK6SmJyEmpqRqYICgkyVrZ2Dk6u7iCeWLiEqBQsDEEAMgwsfkyR3Nh8AkKiCDJFJogyKbpzurXa5XKFbh7oTT6tfgAinQCiA9EjcWMSThhKCWIqMtrWjirFZhaVtkr2Co7OCmsNG6ROFBsHg2h0qAEmOEjkMYqNEPcErJFDosmo0V9nqUEkoMFVql9ar96o1AcDQQBhAAS+wpAGkgmEAIJUKgAdQYdB2MOGsVAY0RyOU2gxaUxUwQag+GHmcxuCUUujEf1JQJBFF2Bx5cNOiBWWK+uJk8xF8gkd10ahVGwAbiQwJwMAAjABOnAA7rBKBS6PsmTRDnEorCTvzEE5cQoRTolvL0li5NlZPMEtpVMllSTbfbHcgAMY8TgusFBABqDD8FMDHEGvPhCD0SKU5oKknMujTWIVHdS5hk-YVSTSCWtmDtEAdGHzheL7SCACEmfSWIwQkxuUHazqww3dE2W+knBZOxKcede1GlFkEgkcs5Rxhx5Pp0WS0zOpCALL7Jg0bWh+Jd33RxD3bE8SmuL4LxmNM9xxTN1jHHMpwLV85x2fYqB9PwwhoPxmH-PlAKUOQkQyNQJjkbQpXObQJC7c01AvEUyjUexNAkB8n1zVDZw6JcaE5Qj60bS4DzbY9DFPTRcTEcwWKSdj8i45CX2LKgmVLasQGDOtdQQMQlgwa4VDmBQjw7ejT0taRjXmNQ5AWEVOKzJCJx4mcdjgPMXWwVBeWoTTtN07diNI1Ikko6jmwkOisTY+QMHMQ1+3M+SXMQx9VLzPNOAIPAeBLMJGAAMT8LVN2OIixlUbQMAzFRNEtXJHC7NjI3kjt9HOextBU9yUNy-LCrnedyo-VhhP02r6pMxxHKlMRWtPGikvk+4dAkK5lH658crygqis6Jl+kqkNqumKNZpuebmqWqyIMyaRkrS8zzX0K1XKy9yS3nRg2SoYKtwAsYowkMSQIkjspJKGxLBeu5YquLQ+q+7i3wpQS6CmncwYh1sLPA8QJCRWU2KjY0Jl2zgMYpBg1z-M69Nxuj8dAySu0ii9XvOSnUcy7w8BBKB-ECfYNxrKr6zY8GHKkK9IO0JQnglQzbPs3QKY+h88wACzAPMAGthdF4I+hx4jJFkApjXlRUMi7OZueybIZmSKmvr1g3jbwEW2UYVhGRZdlOQlnTgYu8ZJlh0mTQWRzbyWFz6jwTgJ3gOJGkFogMBIcgLbGUyhRUV7oYNNQ6usGwPhqZwlofbOvB4N1fbCZBYFgd0iwgAu9SW4yQJg9NrnLyv3k+b5ExkBvmiIXuEFqS45ruB4tphxB0TkZN7Mc2KvkTB8yRBXOyDAeeHIUYvETjMQDRmbe91RSQEgkBZD7VPAMHdFuoDbjuu5dD3JmoUxj6glOkdWO8nLmXfuSeeUh4qawflGG4Sh0TJH5v8Nyk5XQei9PPawl9UwLGSFeS08h14IETHVF66RtB5ClOYamKEZwsKLPPGQeRLh2UKBMehJEEgMXCnJKM8cnDQ2nmjbKrCbScGwHmM+wCQbTC4aZS0FEK43FIl2PI0gRGUU1n2BCWDvp7VYcgUgzQAC2YACocNUTwjR-DtGnjSFvER9C5Iigopgxo3E2EumdPmQ2UA3T5SAZLc69ZOFbzUbwzRAiuzNksB4pW5oyjWCUMwtS89lC4mbJDQmlCX4LGYlkRQWQliSMyv4tSXlYA+T8szcOUt9JaCIZ8OQMgPhyUcMU80dUX5bSVjkbIThsn7WGhgVAboABm2B85KMjltaQV5ozdI0K-FxEE2JIhesrXRUhVATKGgVZ0CzLG+3gbkS4UZlAbJ6tsxIUp4byWuJwm4eRqkmNqZMs5qBSDICIiFZRC8blrPuWgx5gjTyZCYi9ZQbEloZGJDU7KpyeAcNvNdRqC0WoPUSB2Dq5hNA4hRFeamuTChsyhkTBAytwaygmGUTh9DPoC2aMLa5WJDJMSrjYWMVx0g631kbLlSz6xHiXjdFeXS14JjqiIr4dElYKh0COVy59b6uJlPMKFWy5jpCyW4FwQA */
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
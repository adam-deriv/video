import { createMachine, interpret } from 'xstate';
import { useEffect } from 'react';

// write login valid guard

const isLoginValid = (_, event) => {
  console.log(event);
  if (event?.data?.username === "admin" && event?.data?.password === "admin") {
    return true;
  }
  return false;
}

export const appMachine =
    /** @xstate-layout N4IgpgJg5mDOIC5QEMAOqB0sCWUB2ArqgMQDKAkgOIByA+gKoAKioqA9jgC7Zt4sgAPRAFoAjAAZRGAJwBmaQCYAbOKVKA7LPXiFAGhABPEVvEz16xbIXyALLNGiAvo-1pMOfEWKUA8rQAyPpTk1PzsXDx8SILGogAcGOo2OjYKCgCs4pk2+kYIwlpKGErS6RmK6XH2orLOrugYADZsUNh43n4UNExhHNjcvPxC+fYJSSlpmdm5xgoJJWVxdkqiNnHiNnUgbk0tbWRUdCG9EYPRwwVzickKqRlZGzP5c6YLsuLSNkpfNqVbOwA3bAQMBsDAAIwATmwAO6wMDEADCACUAKIAQQAKqiTv1IkNEGspO9vhJ1JV1Mo9IYRGlZGYLLJ0hYJKJ0koFP8GkCQWDkABjThsSEdWgANR85EROOi4TxZ1Aw2kCXZ4nG9m0GiqT3S8QwvzkuukDm+SS5mB5oIwAqFIt8tAAQujEQBpSjInz0agAEVxAyiisQyowqvVok16m1NIQd310k+OgcFjizPNGEtfMFwtF6P8hwAsqjqJi-fjzkGVSowxGo3kbNo43I2WskjYammM9as3a-N7UaQUeRGJjyD5QrK+v6CTGHDIlOtxHFJtJvk8rNJG7IlOy5OY-i5ttzgVabdn7c7MT5kaWFTEEMHQ8kNapI7I10lN9uSloLOkO8fM1tMh0TFGVWEnMtAxjOJiVUNs1QpKknjEckGTieMt3nD5Un-Xku1tb04H5SFsFQf1gNAm8AzvNspBXBcl3KVdozUdQZAw7RRGsckNlwk9+X5NgCDwThRUYD0ADFyH8MCQDlKdywQawpEkeQFA2Gx0nSFdRGQ7cMHeesHi0mCPjiPjM0E4TRPtB1pLzahKCo6dlIwVTFA0rSdOQ8MDI2NQ4iUewVHrJYLK7KyRLE-x0XHcDTmo4ZXPc9SbE07SVh8mo-K+eJUjKNRtws0UHQ9AB1UhZPkyCaPpR9xGfLUMmQhQ9WULJZCXNL1BUVZivPRFL2vCcEunOwQyrJ9wxfJd0mQ2RxvrX9kgahw4nUfq-GdRFPWLZzFPG+rGsjZrozEDIMHWXKlgyZQ1D-LY8DYEF4GiHYPEIVB9qglCNy0hRyS05I220OJ5u+YoFHjOwlh69kMjTZpWmo6rbwuZJ0jcsplSC40uOkcHMbKLj53UuIl1EIqD0BACIWhOEwG+u94g3Q1GXrDR1MplrZ2NDJ0JWViofC09IXw4UmaSwKQ00hrNKbXU5ujTrTFh5IgoCrmRe7dM2GwflGZG+VEsQOYinSWWFu0+xFZ1W5LvrLd1I0CRlW121rUaXA8AAWzAETJdN6WLcyK2FbZJ4OYdzQMm+KGGvM6mjzw0WIQFABrKBoWEiBA6U4PLflm2I+jVIElhpk1S+NU5lqJOLVp0W84-I7pq1N9ozmDcDVkXv1Jj9I6-qBuU+7QjYGI0iFPi43p2tjBlDWDyU2kVQ13kNzTSsVqNVSTZ6-TRuBKEkSMFQaEADNsEaQ2Z+nu8tCJqHBasXUrE05DKhkdkSl+cQ5ZTE4A+nYBSRU4BCa+Xs8BQDzo-EMz9KavxqLcJWeQxCmFKPdWGKxUiYW1mAs+jRkAowgmjRAcDsYvwyMgj+Z0JBFEwWoaQFh1Dhk+JyYBR8wF537m5GoHk0peUynQ4MhltwfCTP3ROw9D68jzqIP6k1Vo1lOmgsu+o9yBSXsyM25o87CFSBuLIUNAryAcFDT+kgNG-lbIFXU5JnDOCAA */
    createMachine({
  id: "app",
  initial: "login",
  states: {
    signup: {
      on: {
        SIGN_UP: {
          target: "video",
        },
        GO_LOGIN: {
          target: "login",
        },
      },
    },
    login: {
      on: {
        GO_SIGNUP: {
          target: "signup",
        },
        SIGN_IN: [
          {
            cond: isLoginValid,
            target: "video",
          },
          {},
        ],
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
  },
});

export const useAppService = () => {
  useEffect(() => {
    appSerivce.onTransition(currentState => {
      const joinedState = currentState.toStrings().join(' ');
      const app = document && document.querySelector("#app");
      app && app.setAttribute("data-app", joinedState);
    }).start();
  }, []);
};


export const appSerivce = interpret(appMachine);
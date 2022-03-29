import { createMachine, interpret } from 'xstate';
import { createEffect } from 'solid-js';

// write login valid guard

const isLoginValid = (_, event) => {
  console.log(event);
  if (event?.data?.username === "admin" && event?.data?.password === "admin") {
    return true;
  }
  return false;
}

export const appMachine =
    /** @xstate-layout N4IgpgJg5mDOIC5QEMAOqB0sCWUB2ArqgMQDKAkgOIByA+gKoAKioqA9jgC7Zt4sgAPRAGYALAA4MAVmEBOAEzDFARilqpAdgA0IAJ6JlABlEYAbIfHHRGjeOXXDUgL5OdaTDnxFilAPK0KGnJqfnYuHj4kQQNhZQwNYXF5KUME+VF5ZXFxHX0EWUlxWVTlRNE1eQLTFzd0LFw8bDwff0DqJlCObG5efiEEUriEpJS0jKycvQNRUwwiw1NsjQzhcxsakHd6-CayKjpgzvDeqP7lTPjE5NSlcezcg1kTedNTVbllWWVTDQ2tgDdsBAwGwMAAjABObAA7rAwMQAMIAJQAogBBAAqKKO3QifUQsli8XE1hS30JilEDwQyTi5ksSnk8lMUlMyT+dUBwNByAAxpw2BCWrQAGq+cgI7FRMK4k6gfpSUSyDCGOSKJSyTWE7RTfJPFXiKTKDQsyoZSoczBckEYPkCoV+WgAITRCIA0pQkb56NQACI4nqReWIRXK1UKYQarXCHV5IqSCxSJk-YSaUzKZSWjDWnn8wXCtEAGX2AFkUdQMQG8acQ0qVWrI5Vo7GCTMDUnDN8lFIFFmc7a8w7-L6UaRkeRGBjyL4QtKuoH8QhxGyMKIZj3u2VI9TLFJ27TxIlCYZ5H2gTa7fnHa6Mb4kVW5dEEKH6xGo5qYzuUvujYeisITzPbkB3tMg0RFKVWHnatg3yIlbFJTtTApMRqSbMwLEMEp1UJUQgIvQdfTgXkIWwVBAzAiCHyDJ9l3kVd1wpGQSW3XUM1EYRpENLtZBsP88NcTZOXPXNeTYAg8E4YVGC9AAxchC0gkAZQXGsEEWOIlUUI1inYn5qVEIwMHkOwAKPDQClSapBIBESBzEiSpMdJ0FOLahKGoxcNNXCMdM7ex9N1cpJBM85bAsiQMx+fDRPEyTpMLNFZyg44aP6bytNTT5-JmFsEFWejQo1LD2KqGLhSdL0AHVSCUlSYKfJUTHDdUmw-PLkg0DBNzeVQvgs34bOE7kCwRW97znVLFya19Wq1bVqVKeijEsNc+PsDRHHK68EQRb0K08tSZpaxt5s-XUxGVWwluKHKyo2PA2GBeAoi2TxCFQQ7YPkTaMAUTQYzXa57jYozZFZcMMnEDQjCeLN3qaL7GvkRajIWBwJHBztweEGLwShWEwCR9LREMVd7CZJVGU2jq3jMBJU1sQxeI46zaitOzLwhEDBWJxAEi6k9UyKIwxCTPLDVmDjblMTGmszIaOeArnszYbBeSJybZTS-mYxVbSRdVcofsWrCyel40MwsqpZDxlXkAAGwaABbMBJL5hABf14WviN8XqXB+iLdkNlD1UHs7cHcE+QAaygKEJIgD2vaFqRDbFk3dWKExpaZUpl1uW3FezTnBw9pM9xO98Ft1E1K8NTJCSTax00j+0iNgEiyNUlLtcXIwOPiDjrBh0pbBkHd7DMFJNGWPOM1x4v+z5BzJIwVAoQAM2wB3Nd7nvaOZFVUiqZJI1SSY8kM2Y2QUApFUNNc2aEpWCNXzhwR3p28CgD2klmLCFk6IyAArYAysszCVB+mIcoMZWSR3fuvB2yAaL1UfP0f+x8gFshARfakqxJC3yUKsI0MNEgILipwD2LIuqZT8npDqNhjJ2EqCyAK4NBrsxLtyD2DhZqnWbAZLqK1OxMi+MhSo3xLQeyyNSAAtMkOYXxwbLhTIaEOAkXBAA */
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
          {
            internal: false,
          },
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
              internal: false,
            },
            GO_BACKGROUND: {
              target: ".background",
              internal: false,
            },
            GO_ALIGNMENT: {
              target: ".alignment",
              internal: false,
            },
            GO_DESCRIPTION: {
              target: "actorDescription",
            },
            GO_ACTOR: {
              target: ".actor",
              internal: false,
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
              internal: false,
            },
            GO_BILLING: {
              target: ".billing",
              internal: false,
            },
            GO_PLAN: {
              target: ".plan",
              internal: false,
            },
          },
        },
      },
      on: {
        GO_BROWSE: {
          target: ".browse",
          internal: false,
        },
        GO_ACTOR: {
          target: ".actor",
          internal: false,
        },
        GO_ACCOUNT: {
          target: ".account",
          internal: false,
        },
      },
    },
  },
});


export const appSerivce = interpret(appMachine).onTransition(currentState => {
  createEffect(() => {
      const joinedState = currentState.toStrings().join(' ');
      const app = document && document.querySelector("#app");
      app && app.setAttribute("data-app", joinedState);
  });
}).start();
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
    /** @xstate-layout N4IgpgJg5mDOIC5QEMAOqB0sCWUB2ArqgMQDKAkgOIByA+gKoAKioqA9jgC7Zt4sgAPRAFoAjADZxGAOwAmACziAzONkAGNQE4lAVnEAaEAE8R6nRnmjZ4teM3jpSzbLkBfV4bSYc+IsUoA8rQAMgGU5NT87Fw8fEiCIkqiABwy8moKsrI6ajnyhiYIwkrSUnY62c46yUmiSu6e6BgANmxQ2Hj+QRQ0TFEc2Ny8-EJFSanS6ZnZuWr5xomyqeVL8iqi8slzDSBeLW0dZFR0Ef0xw-GjxUtpGfJZOXkFplsY5Upail+aOjt7AG7YCBgNgYABGACc2AB3WBgYgAYQASgBRACCABUUWdBrERohNqIMB9xJY1NJqnJVM8ilklBhNNJpNodMzRGpRHpZH8moDgaDkABjThsCFdWgANQC5AR2Pi0VxF1Ao00qT05PSSWktmkNRpOhSFk0LNEmlEEnkkx5mD5IIwQpFYsCtAAQmiEQBpShIgL0agAERxQziysQqow6smai1Or1CwQ91kRs0U3NzOSrOtGFtAuFovFaOCxwAsijqBig3jLmG1TYozGHHHCpa1MmkjpNpNLPUPLteUC7Q7887-SjSMjyIwMeQApF5QNg-iE+aGeItmpkg97PNCkpZJo2+I9NomT8szn7XmnUF3RiAkjK0qEghw5HNaJtY2lDSSvJD8eSmZX5ewBAdc0dMg0QlOVWAXKtQwTZIiRJMkKWSKlZBpMQKQZJlkmNFQ10+bkQP7flL0df04EFCFsFQYNIOgx8Q2fSwiXsddN0qUkaUkaQGQI7UrBKPJzzAy9BTYAg8E4cVGB9AAxchghgkAFUXasEFkJIMA5Jx1HkeQdB0exRCwo9iTmbVHmqdlVTE8ihUk6TZOdF1lKLahKGYpdtKJPTnDmIyTPEMz42wyzFDXZQJCs5J5AcwdBWcmS5OCNE51g84WNGPzdLqQLDOM0ysPNekPkUFJ7gqSQj0SthxRdH0AHVSFU9T4NY+k32jD9Y2yLDZENaxciUTdDNKDkEtIm0wILBE7wfedsqXNYIzrd9P11AbwqUNbLSA9JepSaR6vmhFfXLHzNLWnqG22nRSuyDAtkq+LsmsSRgMabxcDwDooCOGgUUDZbFRykQNlbPd7BsJDjKZEoaXZcx90pOwMjNDNgN7PA2GBeB4j2HxCFQa6EOwg9jJcYyOzmPrkiwlQ-1UY01ni0ouW+vtMFadoWI6p8rnScxcn3ZJlDNKxNCZiyKisNd1GSTcJG50DyMhGE4XJ58UgPFlmT20o5A5AxwqG9irGqUy+P3eqKNFB2IR13KJYjIzoyM7ROU5H9Xg59JlEkTcOXtocIWzNhsEFMAXcQJYpA7HI9pM9tffjCo-w5lR1AcOzkjDq97WaP6AFswBkuOtLdpPPdTn3HvjS0pGz7JSX3aMC5m7NxPD8EhQAaygKFpIgKuE-d5OvbTxvmxubOckmOslh7H6e8cq8q8mdaNV6ram3j-C2yUPdyT3DtC8o6jaPozrBYhhBU4waxNkCjNNFsH8nF00lHCyOoPz3GmmvC8TkpIyQwKgKEAAzbAzRY5gw0ghESEZ9yhWUNkOoChZ4iGqAyPQdh5Af09hmUQhcUqcHBHAkueAoBVxQRUG258sFGVKq2H4X0OahXuIRch4DKGoGaMgAWcEhaIAYWgiQzC9ysPCuyKQHDJCMkZB+FMJEQG92Svw8e5J8r6SCsVUKpVwwVSPFoNM6hdT1SrqaHe9Y+qNh2oUYQ9xUgHWcEQ1QppShZhJgDKu1wpDRmkOaRkjgFY7kQBUGQ6hjQfn3OkLuP0An3APGLVUktzT7iwjkIk7jPrxW3GQ9wrggA */
    createMachine({
  id: "app",
  initial: "login",
  states: {
    signup: {
      on: {
        SIGN_UP: {
          target: "signing",
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
        SIGN_IN: {
          target: "signing",
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
import { createMachine } from 'xstate';

const stateMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QEMAOqB0sCWUB2ArqgMQDKAkgOIByA+gKoAKioqA9jgC7Zt4sgAPRAFoAHAHYMEgMwAmACwBWedIAMs9YtkAaEAE9EARkOipi0YdXitSkwF87utJhz4ixSgHlaFGuWr87Fw8fEiCIrIYhrKiAJwAbBIx4qIasuK6BgjCsooYsYqxavKJ8fLiqvKVDk7oWLh42Hge3r7UTIEc2Ny8-EIIhvEY1tHSCZWKiobS0pmIuVHS4jOionKVFoY1IM71+E1kVHT+ncG9Yf0mkkux8gmK4uVTZXMDqqoYVe-S8blVctJtrsAG7YCBgNgYABGACc2AB3WBgYgAYQASgBRACCABUMaduiE+hETPlBrJoolpKtVL9XpNpPl4tEUpN4mNckC6qDwZDkABjThsGEtWgANU85BR+LCQUJ51A-WE5gw8Vig1UoiehUUs30iFWkUGJVi4nEhnV6i5mB5EIwAqFIq8tAAQliUQBpShozz0agAEQJPVCisQagw0kUZVE6nU8hUZoy+oQ4lNw3jhkK8duynE1owtr5guFoqxABkjgBZDHUHFBokXIyyIbx+LmmJLXWrUSvcQxKLLdS5CnMsb5wv24tO7z+jGkdHkRg48ieAKyrrB4kIH6M1RRrVamJlSOKV6xWSRalm2KxGM39mxcdgu0O4X+uD8mHYVDBshYsUyqwG4NqGCDyNEGDvJMVjmA8hisr26qfLq0iGOBN7LIMT68pO-JsAQeCcKKjA+gAYuQZaASAcqbo2CCJNc4GWDG6QjHqWRaB8oiKKo0joSo8aiPE2EvvyeEEURzouhRFbUJQ9YKuECBrJE6qJn2zYKPE8T0heqoxKMxgaIk8giUW4mEcRZZYmuQFnCGSm3vIkFTHIJjxJMUw6MmUymNEJSoW2PGPI+jg7Nyz5sKKLo+gA6qQVE0SBSnCCYsQYLIsTqOyyxmiYp7JnIzmZkUWVlNM0x7mZpYojinhogpDn9A8GUSFUN6qKVvF8a8gmQZq3ECRoZrNtVzruiivq1o1W7MulvFCcozKxpmryoXktLsmMUGareDhhXgbDgvAYS7K4hCoDNdGpVqEbKFMEyWLYa35PIGi6uhzLLUJ+bnU0V2gReQxqHuFSJMZqRJlkmZSGM+5HnuF7UmZ0JwoiYAAyluSSAU0RrMoe5WLI7GIG9phWL88jcU5ahbGFIKRZOjr2gANg0AC2YCEZjSog1EhR9rcqTUsovYlIsaGqPBvwzCjr4wtCAoANZQHCBEQDzIh8yVgtU8Tg2vFqjIVdSSjxO8nWKHLU4Fmw2D8hj672VuwjawLmV6yL8hnlUEtVBInVvXTtQ2oz8ua9kRX86aHvCwbybHgOmW3ksF6aNbjrvrAn7frRdnyk1iBRkMN5LOo8HiOy2lnsYGXxmnzZxua1sWZwGCoHCABm2As47+d50p7bDLecHLcxhivObeTLBeppqrSGEt-hhHQj3bN4FAEdrC2CRU5DbaPDpCeVBGxMVA8dxoasS8Se3LPIA5SWKf0t5cSN1iodSxhQ4g5uMko6oqg8V4rSQE9MIo4QFK3CO2lGR8WMJqdQZpXK9RmFEBQyx2S0jymAkOBZIoR1dlTaOus46i2TMTD4m0ZgMkzPGWW4DLpOwLi7VOJDY763IVkYQt58iFEyikNOqRzz7TsEAA */
createMachine({
  initial: "signup",
  states: {
    signup: {
      on: {
        SIGN_UP: {
          target: "#app.video",
        },
        GO_SIGNIN: {
          target: "#app.signin",
        },
      },
    },
    signin: {
      on: {
        GO_SIGNUP: {
          target: "#app.signup",
        },
        SIGN_IN: {
          target: "#app.video",
        },
      },
    },
    video: {
      initial: "browse",
      states: {
        browse: {
          on: {
            CREATE: {
              target: "#app.video.actor",
            },
          },
        },
        actor: {
          initial: "alignment",
          states: {
            alignment: {},
            background: {},
            voice: {},
          },
          on: {
            GO_VOICE: {
              target: "#app.video.actor.voice",
            },
            GO_BACKGROUND: {
              target: "#app.video.actor.background",
            },
            GO_ALIGNMENT: {
              target: "#app.video.actor.alignment",
            },
            GO_DESCRIPTION: {
              target: "#app.video.actorDescription",
            },
          },
        },
        actorDescription: {
          on: {
            SAVE: {
              target: "#app.video.actor",
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
              target: "#app.video.account.profile",
            },
            GO_BILLING: {
              target: "#app.video.account.billing",
            },
            GO_PLAN: {
              target: "#app.video.account.plan",
            },
          },
        },
      },
      on: {
        GO_BROWSE: {
          target: "#app.video.browse",
        },
        GO_ACTOR: {
          target: "#app.video.actor",
        },
        GO_ACCOUNT: {
          target: "#app.video.account",
        },
      },
    },
  },
  id: "app",
});
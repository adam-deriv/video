import { createMachine } from 'xstate';

const stateMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QEMAOqB0sCWUB2ArqgMQDKAkgOIByA+gKoAKioqA9jgC7Zt4sgAPRAFoAzAFYATBgBsAFkmT5ATmWS5ygAziANCACeIyQHY5GTaICMcuVeWWZM8ZpkBfV3rSYc+IsUoA8rQUNOTU-OxcPHxIgiKW1rJqmsbKonIAHGoy1nqGCGKayuZaxk4Z4sbi9jKi7p7oWLh42Hj+QSHUTBEc2Ny8-EIFlpIZGKKmUpWWFbWieSK2ZjlFxg7VxhJV9SBeTfitZFR0YT1RA7FDCcUalRlFlsrycrULBaOiGGrGmpKimi9RDIKjs9gA3bAQMBsDAAIwATmwAO6wMDEADCACUAKIAQQAKtizn1ooNEPYMDZtJZjBl-pIUsC3jJNF8XiNqakMrSMqDGhCoTDkABjThseHtWgANQC5HRRNikRJF1AQzELNkE2p4nElisNLkbxeMgwlScjIyGSUDj5mAF0IwIrFEsCtAAQrj0QBpSiYgL0agAEWJ-RiqpEQNZtR+up1eoSpje4gkprK4kyEzpTjcHl2-MhDqd4sluIAMscALLY6j4kOky4RjXR7W6-WJgyIFlmM02CbGmTKcS2jD2oWi4uuwPY0hY8iMfHkALhRW9UNkhAOT4ZR6DuSae6iSTJ4xG0SfdS-ObWRx64ejx3jl1BT34gKYusquIFSOamOWONtoaHYIDImyps824uIeZ53gWY7OmQuJSgqrCrvW4YIBSVK6rS9IWm8IxmMoLwWPYEzGKkciwYKD7OoGcDCvC2CoKGiHIR+YZfjSxSSCMWRPOo3LKBkbymMYlL2FUNg0toQLUYWwrCmwBB4JwkqMH6ABi5ClihIBKmuDYIOknxWGaCRAm2onieIThmhkcjWJYFhDrm4JwQ+SkqWprpujp5bUJQHHriZ4z-mUFm1AmBEvKa2Y0sm-7WJk8ljl5qnqaWuLLqh5ycUMoVmRFepRTSbxjLZOpAkl-wyLxyipZKbp+gA6qQekGehX7CEsXzbkCQlVXVomshRxEsnMmjaLxjWui+b7BUZPXpH1JWDcmw3AcIjimsm9jWFI9xWrybn5oKJboui-o1otGHLUR-XAqkQ2SG8DJjCY2SSKoya2XJOx4GwULwLEew+IQqC3d1ojCRgxjfQocjOLc2hAfkPWxQkUhalNGTyJIw7g60UNXI8cMTKUVQVA5epvBjrL7s4urUnuxqpXCiIomAJNGPDshQfDqQzBUJ7AXzY0w4Oyi0pkTzs0W8KOgANs0AC2YCqTzwy2bIUgDs5dIaDS8zARN4GHRYZ56idDR2h5CtwiKADWUCIipEBa8I-4mk4Sj2Pu6SSSb+THuBmSbLYDLEfLj4jmw2DCtzK55euXs677+sB0bmxGsC5v2NLGjaA1p12zRDsK57eriLILKtlULI0hUzJVGHfx7g4xsx86nuiA5v4tvGBpvH3lhh7Z2SBy83fivRsCMcxhm5cq+WIIe4m-I5tnC+o2NJlkcO8RUqzJkdMfpZwGCoIiABm2BK0ny9L1+zhblYMOPEbdLN2LxSVbG9w6rpksOfZSqk4T3xVngKAWtX4YDpHqAuX8+66GAtYCqdlbIaFqOIQ2oDvJXyVsgTinVPxDDgQgj+xF7Df1QfkZycV0xVASDkDQTwS62xHPbRSYDOBazsGFcyJUrJbTKJSdIup2QuGLjmTho5PZIzGMJNaz0NqvS2p3cRNh5BOF7A5KipcFFWlWgNVRQJ1Ho11MULGfxTAWE2E4dw7ggA */
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
            actor: {},
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
            GO_ACTOR: {
              target: "#app.video.actor.actor",
            },
            SAVE: {
              target: "#app.video.browse",
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
import { createMachine } from 'xstate';

// write login valid guard

const isLoginValid = (_, event) => {
  console.log(event);
  if (event?.data?.username === "admin" && event?.data?.password === "admin") {
    return true;
  }
  return false;
}

export const stateMachine =
    /** @xstate-layout N4IgpgJg5mDOIC5SwC4EMVgHRoA661gEsoA7AV1wGIBlASQHEA5AfQFUAFRUXAe2JRFepbiAAeiALQAWAIzSsATgBsAZkUBWaQCYADAHZFegBwAaEAE9E+5VmMbFx-bOXTd93cuUBfb+dQY2HgExGSUVAwA8iz0zHRMonwCQiJI4lKq2qpY7sqy+s7uqrLy5lYIkqr62naqcrryuopu9r7+6Jg4+IQkpESkEdGxTJyJ-ESCwqISFZnZufmFxsWllhnutXKy2trGyiolbSABncE9ZP20jKzxY8lTaTOVqvN7i7JFJdJlUtrSCss5FkXNINLIqkcTkFugA3IgQMC8LAAIwATrwAO6wMBUADCACUAKIAQQAKoS7hMUtNEDtjFhlGDVMZjODlHtdBpVD8EMC7A49so9Hp9Dp9JCOtCCHCEUi0ABjFC8VGDFgANUidFxFLSSSpD1AT1kjiw0jUmnyik8e3sPI+eiwhWkhnBemNPj8x0lXWl8MROEVytVACFibiANIMfGRNhMAAilMmqUNUmN9LN6jBhmt7I0dvcCid7O0WjN7IlgR9WBl-oVSpVURYxIAMtcALKEpikxPUx6pk0Zi3Z9m5nnGIyOj4aXTuJzbZ0V06wv1ywMN6Jxwk0Al0DikuiRBK68ZJmkIeT6Bn6XSqAzbFxaDTKMfOyecmcs5x-RSLqXVlcBvWqphqSkT4j2BrpBUaamuaWZWiOtprAgmi2E6Vozpo1SyL+VY1quQE0MSao6jwJ69imvK7AyTIsmyHJcjy2iaPyjgaFyfwaNo+SqLhZz4YBypxnA8qokQuBJrQxGkSAeqnn256vso163l+D6gs+yHzjU3G6GauyyE+VrGHxy6ygG8q8OQpAoKqHDRgAYnQzYyXJFFQZI045B8xhuNILJ1Bozg8jo2RgoyLiaIoxTFKZvrmQqlnWbZjbBs5rZMAwEHJh5XkNAWekBaCwXIf5l7hdOyjuPkVX-HF-4JfKSU2XZzbEkeZH3DlTx5T5flFUFsg8qoDhYBV2j6MsI5PrxnpQnhK4htGADqNCueRkFPCW2SDvBOZIeUWTpvo7GZFazTFO49X4cBuKgeBx5dWekjbbBmaWvteZaXpWAjY4ziuO405aNdi2NmGuIxl22XPa9u0fYhX3lHUl4NIyE1TXsM2+J6pC8Ai8BpPNZyhBQuAwwpkguJe457EYciig4jHIZUWhjYy-y6NoQq0y89Wk-0FOUTIfxKHBOgGEY7g8qzGg5AYVX7E03GKNFoPmWimLYkLHmKLIOQsoo+jFDoetG0NyElroWDbPYE11PYvnMurtZroJqI6zMctcXpI3MVoxjc75SOICo9KqGo-n-GVJYeu0lb8QBdbKtWvBEPKYCe4g3t6NIfuaP5QegvmmS-ZHxuDTxLsESnaAADa9AAtmANlZwgOe+1xBeB+yxfIVaCgR3UmiZEKk04XN3qJ419YogqADWUDotZEBtx3eddwHRch+eTS2EP+n7BHwrV+7bcvTsb1DghNo78YBhvuxBZnVkp-J6iwmwKJ4nyZ1+rdYgOoCgVAA2dI4eQ0hNBjjUKaF0QobxDw0G-JqVkbJYFwOiAAZkQOumdHr-zPCUa205nSsn2IZfyN4QojRtvsME4JHBlmkMg5qKAUQ4IbqQKAbciFjT0uPchAcqGlVVrQzQM4fZ62ZHHL0CczKu1YeguuaAcpuU2ogXhJCBF6yEdyZCVR9aRS4jsGwDQrRIMnnI+KCjUEoHPqKbyBV-KAiCkxBxFUCiGFvC8Qy1dz4TUvPDYct87SKF+gKL8VQjaB25nFc+-x6QqEzBLQwJgZb-DloCdwRgdiSNwnCMAGJ4lsySQXEUUszBaSqLYXSoJjTMnBIHX88TJpi2SeUtJLMwT0iyeOIUXJoqzV8EAA */
    createMachine({
  id: "state",
  type: "parallel",
  states: {
    app: {
      initial: "signin",
      states: {
        signup: {
          on: {
            SIGN_UP: {
              target: "#state.app.video",
            },
            GO_SIGNIN: {
              target: "#state.app.signin",
            },
          },
        },
        signin: {
          on: {
            GO_SIGNUP: {
              target: "#state.app.signup",
            },
            SIGN_IN: [{
              target: "#state.app.video",
              cond: isLoginValid,
            }, {
              target: "#state.app.signin",
            }],
          },
        },
        video: {
          initial: "browse",
          states: {
            browse: {
              on: {
                CREATE: {
                  target: "#state.app.video.actor",
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
                  target: "#state.app.video.actor.voice",
                },
                GO_BACKGROUND: {
                  target: "#state.app.video.actor.background",
                },
                GO_ALIGNMENT: {
                  target: "#state.app.video.actor.alignment",
                },
                GO_DESCRIPTION: {
                  target: "#state.app.video.actorDescription",
                },
                GO_ACTOR: {
                  target: "#state.app.video.actor.actor",
                },
                SAVE: {
                  target: "#state.app.video.browse",
                },
              },
            },
            actorDescription: {
              on: {
                SAVE: {
                  target: "#state.app.video.actor",
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
                  target: "#state.app.video.account.profile",
                },
                GO_BILLING: {
                  target: "#state.app.video.account.billing",
                },
                GO_PLAN: {
                  target: "#state.app.video.account.plan",
                },
              },
            },
          },
          on: {
            GO_BROWSE: {
              target: "#state.app.video.browse",
            },
            GO_ACTOR: {
              target: "#state.app.video.actor",
            },
            GO_ACCOUNT: {
              target: "#state.app.video.account",
            },
          },
        },
      },
    },
    responsive: {
      states: {
        desktopLaptopL: {},
        desktopLaptopM: {},
        desktop4k: {},
        mobileL: {},
        mobileM: {},
        mobileS: {},
        mobileTablet: {},
      },
      on: {
        GO_LAPTOP_L: {
          target: "#state.responsive.desktopLaptopL",
        },
        GO_LAPTOP: {
          target: "#state.responsive.desktopLaptopM",
        },
        GO_SCREEN4K: {
          target: "#state.responsive.desktop4k",
        },
        GO_MOBILE_L: {
          target: "#state.responsive.mobileL",
        },
        GO_MOBILE_M: {
          target: "#state.responsive.mobileM",
        },
        GO_MOBILE_S: {
          target: "#state.responsive.mobileS",
        },
        GO_TABLET: {
          target: "#state.responsive.mobileTablet",
        },
      },
    }
  },
});

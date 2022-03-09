import { createMachine } from 'xstate';

const stateMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QEMAOqB0A3AlhMA9hgEYBOBA7rGAMQDCASgKICCAKk4qKgbDgC44CAOy4gAHogC0ARgAcAVgxyA7ADYAzAE4FABgAsamQCZdWgDQgAnog36VGBXI3atMhcYVa5+gL6-LNExcfCJkAGN+AlIaAHEAeQB9ADV4gEk6TiQQHj5BETFJBCl7R30tXWN3Yzk5LWNytUsbBCclLX1nIxc1b0V-QPRsPEIMCKiYhMSAIRY6AGlYhniAVQA5ABExXIEhUWyi-RkMcoq1FRlyy7UnZsQ9Y48VOWMNXXO7GRkBkCDh0LGkWicSSLAAMmlYmsALJMNZsba8XYFA6IGQaBxOepaLTPfQNGQqO4IfQaY46NRqOTdHS6XQaH5-EKjcbAqYbJgAZUYaQACmw0vE1oi8ntCtJ5McVCoKTI3IZjJTiZotI4VC4OhpjFUvMZGUNmWEgaQNnBwqQcKh8sIaJyWMkstwkdbxcVXvoMLpCV4XvJPL0FMrvBg1LoFPoFFTLhVpf4AiBhAR8PBsn8+FBhABXVAi5H7UBFGRGDDaUyErUfRVyYnaDDGWlqRXPVQKDH6zDp4Q4fM5Z1i1HFL7GZTOCMqMwKccUmsemUyr1GLQaRROPzxv4RcIETPCfgYVDkABmOAANmBcy6B+qlDU6opLvfOsTCaql4Y9LVepoVO3AVud3uqAnsgPY7JeBaIOqqpVPeDRktquLEghIY1DcXxkjIBguL+m7bruJCnie3ZQBe-YQQg17KGGlS4jcVT6M+bx1vo7xlp4DSNDh4T-rupEouRFzHLe3gKA+olPtY9wOA07xyio2oYoqa6DMEIxEGQlDUHxPZFFI2oem45xYhxxjSkh4YlrUugXGYRYKHoym-AaakkBEADWUDkDuEDaa69ZyBgFwfPBBj2U0kmtBiGCXEcLyRixug+L+hpjERGYALZgLx2RgWREj3ISjjUmG+KTqSGLEvYSgmNKigaKubhaGoyUuVgBA4OE545X2-H5QgbwaCGJiavWBjONWEWhko+LOK2WIqK2P7rs5AKsqQvkDrIzwYLRlLuGGqivBolVVIFzznGoEZFvWS0qf8LLGqasDmpa4G9qKvW6a8jhFnK+n4hxRIReOw4dOUUHUq2EYtaEG3kXpTiet63gwf6FgRZKllyNZ7y1M8pntnDfV6S8SMLSjfqRujLRSMudaVGYqijtSKhrv4QA */
createMachine({
  initial: "signup",
  states: {
    signup: {},
    signin: {},
    account: {
      initial: "profile",
      states: {
        profile: {},
        plan: {},
        billing: {},
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
        background: {},
        alignment: {},
        voice: {},
        actor: {
          on: {
            GO_VOICE: {
              target: "#app.video.voice",
            },
            GO_BACKGROUND: {
              target: "#app.video.background",
            },
            GO_ALIGNMENT: {
              target: "#app.video.alignment",
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
      },
    },
  },
  id: "app",
});
import { createEffect } from "solid-js";
import { appService } from "./appService";
import { newPassword } from "./SignUp";

export const useCheckStrong = () => {
    createEffect(() => {
        if (newPassword().length > 7) {
            appService.send("STRONG");
        } else {
            appService.send("IDLE");
        }
    });
}
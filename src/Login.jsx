import { createSignal } from "solid-js";
import { appService } from "./appService";
import Input from "./components/Input";
import { useCheckPassword } from "./useCheckPassword";

export const [loginPassword, setLoginPassword] = createSignal("");

export default function Login() {
  useCheckPassword();
  return (
    <div className="mainWrapper">
      <div className="topBar"><div className="topBarTitle">Sign In</div></div>
      <div className="mainContent">
        <div className="formWrapper1">
          <Input 
            title="Email address" 
            placeholder="Enter your email" 
          />
        </div>
        <div className="formWrapper2">
          <Input
            title="Password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => {setLoginPassword(e.target.value); appService.send('IDLE')}}
            label={<div className="wrongPassword">Wrong password</div>}
          />
        </div>
        <div className="formWrapper3">
          <button className="buttonApp" onClick={() => appService.send('CHECK_PASSWORD')}>Login</button>
        </div>
        <div className="signupWrapper">
          <div className="signupTitle">New here?&nbsp;</div>
          <div className="interactiveText" onClick={() => appService.send('GO_SIGNUP')}>Signup</div>
        </div>
      </div>
    </div>
  );
}

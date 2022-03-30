import { appSerivce } from "./appService";
import Input from "./components/Input";

export default function Login() {
  return (
    <div className="mainWrapper">
      <div className="topBar"><div className="topTitle">Sign In</div></div>
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
          />
        </div>
        <div className="formWrapper3">
          <button className="buttonApp">Login</button>
        </div>
        <div className="signupWrapper">
          <div className="signupTitle">New here?&nbsp;</div>
          <div className="interactiveText" onClick={() => appSerivce.send('GO_SIGNUP')}>Signup</div>
        </div>
      </div>
    </div>
  );
}

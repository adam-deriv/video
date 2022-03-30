import { appSerivce } from "./appService";
import Input from "./components/Input";

export default function Login() {
  return (
    <div className="mainWrapper">
      <div className="topBar"><div className="topTitle">Create an account</div></div>
      <div className="mainContent">
        <div className="formWrapper1">
          <Input title="Full name" placeholder="Enter your name" />
        </div>
        <div className="formWrapper2">
          <Input title="Email address" placeholder="Enter your email" />
        </div>
        <div className="formWrapper2">
          <Input
            title="New Password"
            placeholder="Enter new password"
            type="password"
            label={<div className="strongLabel">Strong</div>}
          />
        </div>
        <div className="formWrapper3">
          <button className="buttonApp">Signup</button>
        </div>
        <div className="signupWrapper">
          <div className="signupTitle">Already user?&nbsp;</div>
          <div className="interactiveText" onClick={() => appSerivce.send('GO_LOGIN')}>Login</div>
        </div>
      </div>
    </div>
  );
}
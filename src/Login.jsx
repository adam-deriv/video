import { appSerivce } from "./appService";

export default function Login() {
  return (
    <div className="mainWrapper">
      <div className="topBar"><div className="topTitle">Sign In</div></div>
      <div className="mainContent">
        <div className="formWrapper1">
          <div className="inputWrapper">
            <div className="inputTitleBar">
              <div className="inputTitle">Email address</div>
            </div>
            <input className="inputApp" placeholder="Enter your email"></input>
          </div>
        </div>
        <div className="formWrapper2">
          <div className="inputWrapper">
            <div className="inputTitleBar">
              <div className="inputTitle">Password</div>
              <div className="interactiveText">Forgot?</div>
            </div>
            <input className="inputApp" type="password" placeholder="Enter your password"></input>
          </div>
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
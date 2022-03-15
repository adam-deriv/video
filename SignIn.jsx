export default function SignIn() {
    const onLogin = () => {
        alert('Login');
    }
    const onSignUp = () => {
        alert('SignUp');
    }
    return (
        <div>
            <input type="hidden" id="anPageName" name="page" defaultValue="createvideosignin" />
            <div className="container-center-horizontal">
                <div className="createvideosignin screen " data-id="96:17"><img className="line-1-u6Fixy anima-loading-result" data-id="96:18" src="data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSI4MjAiIHZpZXdCb3g9IjAgMCAxIDgyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGxpbmUgb3BhY2l0eT0iMC4xIiB4MT0iMC41IiB4Mj0iMC41IiB5Mj0iODIwIiBzdHJva2U9ImJsYWNrIi8+Cjwvc3ZnPgo=" style={{ visibility: 'visible', height: 0, width: 820, top: 39, left: '101.5px' }} />
                    <div className="sign-in-u6Fixy" data-id="96:25">Sign In</div>
                    <a onClick={onLogin}>
                        <div className="button-u6Fixy" data-id="96:26"><div className="login-x55FzC" data-id="96:27">Login</div>
                        </div></a>
                    <div className="group-2-u6Fixy" data-id="96:28">
                        <div className="ellipse-1-TZkxDx" data-id="96:29">
                        </div>
                        <div className="ellipse-2-TZkxDx" data-id="96:30">
                        </div>
                        <div className="ellipse-3-TZkxDx" data-id="96:31">
                        </div>
                    </div>
                    <div className="group-12-u6Fixy" data-id="96:65">
                        <div className="ellipse-1-j3FqCS" data-id="96:66">
                        </div>
                        <div className="ellipse-2-j3FqCS" data-id="96:67">
                        </div>
                        <div className="ellipse-3-j3FqCS" data-id="96:68">
                        </div>
                    </div>
                    <div className="group-10-u6Fixy" data-id="96:59">
                        <div className="rectangle-15-FRBKJL" data-id="96:56">
                        </div><div className="email-address-FRBKJL" data-id="96:57">Email address</div>
                        <div className="enter-your-password-FRxjWz" data-id="96:58">Enter your email</div>
                    </div>
                    <div className="group-11-u6Fixy" data-id="96:60">
                        <div className="rectangle-15-FRxjWz" data-id="96:61">
                        </div><div className="password-FRxjWz" data-id="96:62">Password</div>
                        <div className="forgot-FRxjWz" data-id="96:64">Forgot?</div>
                        <a onClick={onSignUp}><div className="new-here-signup-FRxjWz" data-id="145:0"><span className="span0-ZHYFQx">New here?</span><span className="span1-ZHYFQx"> Signup</span></div>
                        </a><div className="enter-your-password-FRxjWz" data-id="96:63">Enter your password</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { Suspense, lazy } from "react";
import { createEffect, createSignal } from "solid-js";
import './stateSignal';
import './App.scss'

const SignIn = lazy(async() => import('./SignIn'));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <SignIn />
    </Suspense>
  )
}

// create signal for SignUp and SignIn and create effect for SignUp and SignIn
const [signUp, setSignUp] = createSignal(true);

createEffect(() => {
    // set timeout and set signUp to true
    setTimeout(() => {
      setSignUp(true);
    }
    , 1000);
});

export default App

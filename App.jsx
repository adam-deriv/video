import { useState, Suspense, lazy } from "react";
import { createEffect, createSignal } from "solid-js";
import './stateSignal';
import './App.scss'

const SignUp = lazy(async() => import('./SignUp'));
const SignIn = lazy(async() => import('./SignIn'));
function App() {
    const [isSignUp, setIsSignUp] = useState(signUp());
    const onSignUp = () => {
        setIsSignUp(true);
    }

  if (signIn()) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <SignIn />
      </Suspense>
    )}

  return (
    <Suspense fallback={<div>Loading...</div>}>
        <SignUp />
    </Suspense>
  )
}

// create signal for SignUp and SignIn and create effect for SignUp and SignIn
const [signUp, setSignUp] = createSignal(true);
const [signIn, setSignIn] = createSignal(true);

createEffect(() => {
    // set timeout and set signUp to true
    setTimeout(() => {
        setSignUp(true);
    }
    , 1000);
});

export default App

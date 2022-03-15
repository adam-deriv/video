import { lazy, Suspense } from "react";
import './App.scss'

const SignUp = lazy(async() => import('./SignUp'));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignUp />
    </Suspense>
  )
}

export default App

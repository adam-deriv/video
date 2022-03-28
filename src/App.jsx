import './stateSignal';
import { useResizeEffect } from './useResizeEffect';
import './index.scss';
import SignIn from './SignIn';
import SignUp from './SignUp';
import VideoBrowse from './VideoBrowse';

function App() {
  useResizeEffect();
  return (
    <div className="app">
      <VideoBrowse />
      <SignIn />
      <SignUp />
    </div>
  )
}


export default App
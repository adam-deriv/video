import { Suspense, lazy } from 'react';
import { useSelector } from '@xstate/react';
import { useResponsiveService } from './useResponsiveService';
import './index.scss';
import { appSerivce } from './appService';
import Loading from './Loading';
import DefaultView from './DefaultView';

const loginSelector = (state) => state.matches('login');
const signupSelector = (state) => state.matches('signup');

const SignIn = lazy(() => import('./SignIn'));
const SignUp = lazy(() => import('./SignUp'));

function LazyApp() {
  useResponsiveService();
  const isLogin = useSelector(appSerivce, loginSelector);
  const isSignup = useSelector(appSerivce, signupSelector);
  if (isLogin) return (
      <Suspense fallback={<Loading />}><SignIn /></Suspense>
  )
  if (isSignup) return (
      <Suspense fallback={<Loading />}><SignUp /></Suspense>
  )
  return (
      <Suspense fallback={<Loading />}><DefaultView /></Suspense>
  )
}

function App() {
  return (
    <div id="app" className="app">
      <LazyApp />
    </div>
  );
}

export default App

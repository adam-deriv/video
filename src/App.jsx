import { Suspense, lazy } from 'react';
import { useSelector } from '@xstate/react';
import { useResponsiveService } from './useResponsiveService';
import './index.scss';
import { appSerivce, useAppService } from './appService';
import Loading from './components/Loading';

export const isLoginSelector = (state) => state.matches('login');
export const isSignupSelector = (state) => state.matches('signup');

const SignIn = lazy(() => import('./Login'));
const SignUp = lazy(() => import('./SignUp'));

function LazyApp() {
  useResponsiveService();
  useAppService();
  const isLogin = useSelector(appSerivce, isLoginSelector);
  const isSignup = useSelector(appSerivce, isSignupSelector);
  if (isLogin) return (
      <Suspense fallback={<Loading />}><SignIn /></Suspense>
  )
  if (isSignup) return (
      <Suspense fallback={<Loading />}><SignUp /></Suspense>
  )
  return (
      <Loading />
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

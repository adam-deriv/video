import { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { useSelector } from '@xstate/react';
import { useResponsiveService } from './useResponsiveService';
import './index.scss';
import { appService, useAppService } from './appService';
import Loading from './components/Loading';
import { useSignIn } from './useSignIn';

export const isLoginSelector = (state) => state.matches('login');
export const isSignupSelector = (state) => state.matches('signup');
export const isSigningSelector = (state) => state.matches('signing');
export const isCheckingSelector = (state) => state.matches('checking');

const SignIn = lazy(() => import('./Login'));
const SignUp = lazy(() => import('./SignUp'));

const queryClient = new QueryClient();

function LazyApp() {
  useResponsiveService();
  useAppService();
  useSignIn();
  const isLogin = useSelector(appService, isLoginSelector);
  const isSignup = useSelector(appService, isSignupSelector);
  const isChecking = useSelector(appService, isCheckingSelector);
  if (isLogin || isChecking) return (
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
       <QueryClientProvider client={queryClient}>
        <div className="sidebar">
          <div className="sidbarAppLogo" />
          <div className="sidebarAppCreate" />
          <div className="sidebarAppBrowse" />
          <div className="sidebarAppProfile" />
        </div>
        <LazyApp />
      </QueryClientProvider>
    </div>
  );
}

export default App

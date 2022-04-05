import { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { useSelector } from '@xstate/react';
import { useResponsiveService } from './useResponsiveService';
import './index.scss';
import { appService, useAppService } from './appService';
import Loading from './components/Loading';
import { useSignIn } from './useSignIn';
import Sidebar from './components/Sidebar';
import VideoAccount from './VideoAccount/VideoAccount';
import VideoCreate from './VideoCreate/VideoCreate';

export const isLoginSelector = (state) => state.matches('login');
export const isSignupSelector = (state) => state.matches('signup');
export const isSigningSelector = (state) => state.matches('signing');
export const isCheckingSelector = (state) => state.matches('checking');
export const isVideoBrowserSelector = (state) => state.matches('video.browse');
export const isVideoAccountSelector = (state) => state.matches('video.account');
export const isVideoAccountCreateSelector = (state) => state.matches('video.actor');

const SignIn = lazy(() => import('./Login'));
const SignUp = lazy(() => import('./SignUp'));
const VideoBrowse = lazy(() => import('./VideoBrowse'));

const queryClient = new QueryClient();

function LazyApp() {
  useResponsiveService();
  useAppService();
  useSignIn();
  const isLogin = useSelector(appService, isLoginSelector);
  const isSignup = useSelector(appService, isSignupSelector);
  const isChecking = useSelector(appService, isCheckingSelector);
  const isVideoBrowse = useSelector(appService, isVideoBrowserSelector);
  const isVideoAccount = useSelector(appService, isVideoAccountSelector);
  const isVideoAccountCreate = useSelector(appService, isVideoAccountCreateSelector);
  if (isLogin || isChecking) return (
      <Suspense fallback={<Loading />}><SignIn /></Suspense>
  )
  if (isSignup) return (
      <Suspense fallback={<Loading />}><SignUp /></Suspense>
  )
  if (isVideoBrowse) return (
      <Suspense fallback={<Loading />}><VideoBrowse /></Suspense>
  )
  if (isVideoAccount) return (
      <Suspense fallback={<Loading />}><VideoAccount /></Suspense>
  )
  if (isVideoAccountCreate) return (
      <Suspense fallback={<Loading />}><VideoCreate /></Suspense>
  )
  return (
      <Loading />
  )
}

function App() {
  return (
    <div id="app" className="app">
       <QueryClientProvider client={queryClient}>
        <Sidebar />
        <LazyApp />
      </QueryClientProvider>
    </div>
  );
}

export default App

import { useQuery } from 'react-query';
import { useSelector } from '@xstate/react';
import { appSerivce } from './appService';

export function useSignIn() {
    const isSigning = useSelector(appSerivce, (state) => state.matches('signing'));
    useQuery('repoData', () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, 3000);
      }),
      { enabled: isSigning, onSuccess: () => appSerivce.send('SIGNED') }
    )
}

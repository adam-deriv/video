import { useQuery } from 'react-query';
import { useSelector } from '@xstate/react';
import { appService } from './appService';

export function useSignIn() {
    const isSigning = useSelector(appService, (state) => state.matches('signing'));
    useQuery('repoData', () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, 2000);
      }),
      { enabled: isSigning, onSuccess: () => appService.send('SIGNED') }
    )
}

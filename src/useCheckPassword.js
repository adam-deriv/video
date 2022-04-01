import { useQuery } from 'react-query';
import { useSelector } from '@xstate/react';
import { appService } from './appService';
import { loginPassword } from './Login';
import { isCheckingSelector } from './App';

export function useCheckPassword() {
    const isChecking = useSelector(appService, isCheckingSelector);
    useQuery('checkpassword', () =>
        new Promise((resolve, reject) => {
            console.log('password ', loginPassword());
            setTimeout(() => {
                if (loginPassword() === 'admin') {
                    resolve(true);
                } else {
                    reject(new Error('wrong password'));
                }
            }, 2000);
        }),
        {
            enabled: isChecking,
            retry: false,
            onSuccess: () => appService.send('SIGN_IN'),
            onError: () => appService.send('WRONG_PASSWORD'),
        }
    )
}

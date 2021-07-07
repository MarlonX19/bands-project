import { useEffect, useState } from 'react';

import { api } from '../services';

export default function useAuth(){
    const [authenticated, setAuthenticated] = useState(false);
    const [loadingLog, setloadingLog] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('@token');

        if(token){
            setAuthenticated(true);
            setloadingLog(false);
        } else {
            setloadingLog(false);
        }

    }, [])

    async function handleLogin(){
        try {
            const response = await api.get('/login')

            if(response.status === 200) {
                const [ { token } ] = response.data;
                localStorage.setItem('@token', JSON.stringify(token));
                setAuthenticated(true);
            }
        } catch (err) {
            alert('Erro ao logar!')
        }
    }

    async function handleLogout(){
        localStorage.removeItem('@token');
        setAuthenticated(false);
    }

    return { authenticated, handleLogin, handleLogout, loadingLog }
}
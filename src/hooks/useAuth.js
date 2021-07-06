import { useEffect, useState } from 'react';

import { api } from '../services';

export default function useAuth(){
    const [authenticated, setAuthenticated] = useState(false);

    async function handleLogin(){
        try {
            const response = await api.get('/login')
            if(response.status === 200) {
                setAuthenticated(true);
            }
        } catch (err) {
            alert('Erro ao logar!')
        }
    }

    return { authenticated, handleLogin }
}
import { useEffect, useState } from 'react';

import { api } from '../services';

export default function useBands(){
    const [bands, setBands] = useState([]);

    async function handleLoadBands(){
        try {
            const response = await api.get('/bands')
            
            if(response.data) {
                setBands(response.data);
            }
        } catch (err) {
            alert('Erro ao buscar bandas!')
        }
    }

    return {  handleLoadBands }
}

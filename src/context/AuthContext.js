import React, { createContext } from 'react';

import useAuth from '../hooks/useAuth';
import useBands from '../hooks/useBands';

const AuthContext = createContext({});

function AuthProvider({ children }) {
    const { authenticated, handleLogin, } = useAuth();
    const { handleLoadBands } = useBands();

    return (
        <AuthContext.Provider value={{ authenticated, handleLogin, handleLoadBands }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }

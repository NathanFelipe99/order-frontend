import React from 'react';
import './App.css';
import AppRoutes from './AppRoutes';

import { AuthContext } from './contexts/auth';

function App() {
    return (
        <AuthContext.Provider value={{
            usuarioId: "456",
            usuario: {
                email: "nathan.guerlando@gmail.com"
        }}}>
            <AppRoutes />
        </AuthContext.Provider>
        
    );
}

export default App;

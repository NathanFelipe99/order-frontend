import React, { createContext } from 'react'

export const AuthContext = createContext({
    usuarioId: '',
    usuario: {
        email: ''
}});
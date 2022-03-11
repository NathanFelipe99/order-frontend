import React, { useState, useContext } from "react"
import "./styles.css"
import { createSession } from '../../services/createSession'
import { AuthContext } from "../../contexts/auth"

const LoginPage = () => {
    const {usuarioId, usuario} = useContext(AuthContext)
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    // const [status, setLoginStatus] = useState('')

    const handleLogin = async () => {
        console.log(user);
        console.log(password);
        const response = await createSession(user, password)
        console.log('login', response.data);
        
    }

    return (
        <div id="login">
            <div className="title"><strong>Login</strong></div>
            <p>{usuarioId}</p>
            <p>{usuario.email}</p>
            <div className="form">
                <form action="">
                    <div className="field">
                        <label htmlFor="user">Usuário: </label>
                        <input type="text" name="user" id="user" value={user}
                            onChange={(e) => setUser(e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Senha: </label>
                        <input type="password" name="password" id="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="action">
                        <button onClick={handleLogin }>Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
    
}

export default LoginPage
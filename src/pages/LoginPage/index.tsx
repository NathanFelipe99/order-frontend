import React, { useState } from "react"
import "./styles.css"

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        console.log('email', email);
        console.log('password', password);
        
        
    }

    return (
        <div id="login">
            <div className="title"><strong>Login</strong></div>
            <div className="form">
                <form action="">
                    <div className="field">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="field">
                        <label htmlFor="password">Senha: </label>
                        <input type="password" name="password" id="password" value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className="action">
                        <button type="submit" onClick={handleLogin}>Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    );
    
}

export default LoginPage
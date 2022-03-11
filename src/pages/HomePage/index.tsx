import React from "react"
import './styles.css'

const MainPage = () => {
    const handleLogout = () => {
        console.log('saindo...');
        
    }
    
    return (
    <div id="main">
        <div className="nav-menu">
            <h1 className="logo">SIGA</h1>
            
                <button className="submit" onClick={handleLogout}>
                    Sair
                    
                </button>
        </div>    
    </div>    
        
    );
    
}

export default MainPage
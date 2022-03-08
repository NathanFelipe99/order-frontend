import React from "react"

import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom"

import LoginPage from "./pages/LoginPage"
import MainPage from "./pages/HomePage"

const AppRoutes = () => {
    return (
        <Router>
            <Routes> 
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<MainPage />}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes
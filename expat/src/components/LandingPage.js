import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className="landing-page" >
            <h1>Expat Journal</h1>
            <h2>Discover other expats and their adventures</h2>
            <div className="links">
                <Link to="/loginform">Sign In</Link>
                <Link to="/register" >Register</Link>
            </div>
        </div>
    )
}

export default LandingPage
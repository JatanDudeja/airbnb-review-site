import React from 'react'
import ReactDOM from 'react-dom'
import airbnbLogo from "../images/airbnb-logo.png"


function Navbar(){
    return (
        <nav className='navbar-logo'>
            <img 
            className='navbar-logo_image'
            src = {airbnbLogo}
            />
        </nav>
    )
}

export default Navbar
import React from 'react';
import './Navbar.css';
import logo from './logo.svg';

const Navbar = () => {
    return [
        <div class="navbar">
            <div class="logoWithText">
                <div class="logo">
                    <img src={logo} alt="Logo of The Survey" />
                </div>
                <div class="text">
                    <span class="theSurvey">The Survey</span>
                </div>
		    </div>
		    <div class="signup">
			    <a href="../html/signup.html">Sign Up</a>
		    </div>
	    </div>
    ]
}

export default Navbar;
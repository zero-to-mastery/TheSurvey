import React from 'react';
import './SignUp.css'

const SignUp = () => {
	return(
		<div className="form">
		  <form action="/action_page.php">
		    <label for="fname">First Name:</label>
		    <input type="text" id="fname" name="firstname" placeholder="Your name.." />

		    <label for="lname">Last Name:</label>
		    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

		    <label for="email">Email:</label>
		    <input type="text" email="email" placeholder="Your email.." />
		    
		    <label for="password">Password (8 characters minimum):</label>
    		<input type="password" id="pass" name="password" placeholder="Your password.." minlength="8" required /> 
		  
		    <input type="submit" value="Sign Up" />
		  </form>
		</div>
	)
}

export default SignUp;
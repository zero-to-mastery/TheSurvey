import React from 'react';
import './SetNewPassword.css';
import '../../css/cssReset.css';
import passwordSVG from './passwordSVG.svg'

const SetNewPassword = () => {
    return [
        <div class="fillForm">
			<form method="POST">
				<div>
					<input type="password" name="password" placeholder="new password" id="passwordInput"/>
					<img src={passwordSVG} alt="" />
				</div>
				<div>
					<input type="password" name="passwordAgain" placeholder="new password again" id="passwordInput2"/>
					<img src={passwordSVG} alt="" />
				</div>
				<div>
					<input type="submit" name="submit" value="submit" id="resetPassword"/>
				</div>
			</form>
		</div>
    ]
}

export default SetNewPassword;
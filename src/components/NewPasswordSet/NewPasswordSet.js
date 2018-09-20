import React from 'react';
import './NewPasswordSet.css';
import '../../css/cssReset.css';
import passwordSVG from './passwordSVG.svg';

const NewPasswordSet = () => {
    return [
        <div class="resetNote">
			<div>
				<img src={passwordSVG} alt="Password icon" />
				<span>We Have Reset Your Password. Feel Free To Log In With It.</span>
			</div>
			<div>
				<span>If it didn't work or you misspelled something, we can always <a href="reset.html">Reset</a> it again.</span>
			</div>
		</div>
    ]
}

export default NewPasswordSet;
import React from 'react';
import './Footer.css';
import ZTM from './ZTM.jpg'

const Footer = () => {
    return [
        <div class="footer">
		<div class="links">
			<div class="leftLinks">
				<div class="linksTitle">
					<span>COMMUNITY</span>
				</div>
				<div class="theLinks">
					<a href="https://zerotomastery.io">Community Website</a>
					<a href="https://github.com/zero-to-mastery">Community Github</a>
					<a href="https://zero-to-mastery.github.io/ZtM-Job-Board/">ZTM Job-Board</a>
					<a href="https://www.udemy.com/the-complete-web-developer-in-2018/">ZTM Course</a>
					<a href="https://www.udemy.com/the-complete-junior-to-senior-web-developer-roadmap/">Senior Course</a>
				</div>
			</div>
			<div class="middleText">
				<div class="initiative">
					<span>An Initiative Of :</span>
				</div>
				<div class="ztmLogo">
					<img src={ZTM} alt="Zero To Mastery Community" />
				</div>
			</div>
			<div class="rightLinks">
				<div class="linksTitle">
					<span>THE SURVEY</span>
				</div>
				<div class="theLinks">
					<a href="https://github.com/zero-to-mastery/TheVerySpecialProject">Github Repo</a>
					<a href="https://github.com/zero-to-mastery/TheVerySpecialProject/graphs/contributors">Contributors</a>
					<a href="https://github.com/zero-to-mastery/TheVerySpecialProject/wiki">Wiki</a>
					<a href="https://github.com/zero-to-mastery/TheVerySpecialProject/blob/master/README.md">Coming Features</a>
					<a href="https://github.com/zero-to-mastery/TheVerySpecialProject/issues">Report A Bug</a>
				</div>
			</div>
		</div>
		<div class="bottomText">
			<span>Made With
				<span role="img" aria-label="Black Heart" className="love">🖤</span>
				By The ZTM Community</span>
		</div>
	</div>
    ]
}

export default Footer;
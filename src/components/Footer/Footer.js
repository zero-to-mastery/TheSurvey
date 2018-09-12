import React from "react";
import ZTMLogo from "./ZTM.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <div className="leftLinks">
          <div className="linksTitle">
            <span>COMMUNITY</span>
          </div>
          <div className="theLinks">
            <a href={`https://zerotomastery.io`}>Community Website</a>
            <a href={`https://github.com/zero-to-mastery`}>Community Github</a>
            <a href={`https://zero-to-mastery.github.io/ZtM-Job-Board/`}>
              ZTM Job-Board
            </a>
            <a
              href={`https://www.udemy.com/the-complete-web-developer-in-2018/`}
            >
              ZTM Course
            </a>
            <a
              href={`https://www.udemy.com/the-complete-junior-to-senior-web-developer-roadmap/`}
            >
              Senior Course
            </a>
          </div>
        </div>
        <div className="middleText">
          <div className="initiative">
            <span>An Initiative Of :</span>
          </div>
          <div className="ztmLogo">
            <img src={ZTMLogo} alt="Zero To Mastery Community" />
          </div>
        </div>
        <div className="rightLinks">
          <div className="linksTitle">
            <span>THE SURVEY</span>
          </div>
          <div className="theLinks">
            <a
              href={`https://github.com/zero-to-mastery/TheVerySpecialProject`}
            >
              Github Repo
            </a>
            <a
              href={`https://github.com/zero-to-mastery/TheVerySpecialProject/graphs/contributors`}
            >
              Contributors
            </a>
            <a href="https://github.com/zero-to-mastery/TheVerySpecialProject/wiki">
              Wiki
            </a>
            <a
              href={`https://github.com/zero-to-mastery/TheVerySpecialProject/blob/master/README.md`}
            >
              Coming Features
            </a>
            <a
              href={`https://github.com/zero-to-mastery/TheVerySpecialProject/issues`}
            >
              Report A Bug
            </a>
          </div>
        </div>
      </div>
      <div className="bottomText">
        <span>
          Made With
          <span className="love" role="img" aria-labelledby="">
            🖤
          </span>
          By The ZTM Community
        </span>
      </div>
    </div>
  );
};
export default Footer;

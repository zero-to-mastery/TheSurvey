import React from "react";
import Survey from "../Survey/Survey";
import "./MySurvey.css";

const MySurvey = ({ surveyContents }) => {
  return (
    <div className="contentContainer">
      <div className="contentAndTitles">
        <div className="surveysTitle">
          <span>My Surveys</span>
        </div>
        <div className="surveyList">
          {surveyContents.map((user, i) => {
            return (
              <Survey
                key={i}
                id={surveyContents[i].id}
                name={surveyContents[i].name}
                desc={surveyContents[i].desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MySurvey;

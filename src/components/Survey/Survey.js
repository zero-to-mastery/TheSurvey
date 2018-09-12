import React from "react";
import removeIcon from "./delete.svg";
import editIcon from "./edit.svg";
import surveyIcon from "./survey.svg";

import "./Survey.css";

const Survey = ({ name, desc }) => {
  return (
    <div className="survey">
      <div className="surveyArtwork">
        <img src={surveyIcon} alt="" />
      </div>
      <div className="surveyText">
        <div className="surveyTitle">
          <span>{name}</span>
        </div>
        <div className="surveyDescription">
          <span>{desc}</span>
        </div>
      </div>
      <div className="surveyFunctions">
        <img src={editIcon} alt="edit" title="Edit" className="svgIcon" />
        <img src={removeIcon} alt="delete" title="Delete" className="svgIcon" />
      </div>
    </div>
  );
};

export default Survey;

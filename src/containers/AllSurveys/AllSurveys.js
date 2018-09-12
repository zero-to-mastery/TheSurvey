import React, { Component } from "react";
import "./AllSurveys.css";
import Navbar from "../../components/Navbar/Navbar";
import MySurvey from "../../components/MySurvey/MySurvey";
import Footer from "../../components/Footer/Footer";
import { surveyContents } from "../../surveyContents";

export class AllSurveys extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MySurvey surveyContents={surveyContents} />
        <Footer />
      </div>
    );
  }
}

export default AllSurveys;

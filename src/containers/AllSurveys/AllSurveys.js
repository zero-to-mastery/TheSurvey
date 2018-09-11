import React, { Component } from 'react'
import './AllSurveys.css';
import SurveyItem from './SurveyItem';

export class AllSurveys extends Component {
  render() {
    return (
      <div>
        {
            [0,1,2,3,4].map(item => (
                <SurveyItem key={item} name={item} />
            ))
        }
      </div>
    )
  }
}

export default AllSurveys

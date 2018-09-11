import React from 'react'

const SurveyItem = ({ name }) => {
  return (
    <div className="card">
      <div className="cardImage"></div>
      <div className="cardContent">
        <h1>{ `${name}rd SampleSurvey` }</h1>
        <p>Non voluptate veniam ullamco esse adipisicing esse culpa consequat. Laboris amet id anim ipsum duis sunt esse sint aliqua qui ea deserunt est.</p>
      </div>
    </div>
  )
}

export default SurveyItem

import React from "react";

export default function Resume() {
  return (
    <section>
      <h2>Resume</h2>
    <div className="proficiencies">
      <h3>Front-end Proficiencies</h3>
      <ul className="languages">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>JQUERY</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
    </div>
    <div className="proficiencies">
      <h3>Back-end Proficiencies</h3>
      <ul className="languages">
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>Mysql, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>Rest</li>
        <li>GraphQl</li>
      </ul>
    </div>
    </section>
  )
}
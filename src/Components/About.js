import React from 'react'
import Navbar from './Navbar'
import BottomNav from './BottomNav'
const About = () => {
  return (
    <div className="App">
      <Navbar text={"About"} />
      <p class="version">Version 0.6.0</p>
      <h2 className="about-header">Objectives</h2>
      <p class="about-paragraph">
        To provide an easy to use application that will allow individuals to
        learn and improve their vocabularly and grammer.
        Communication skills are tied down to how well one can articulate
        themselves using the literary functions provided for by a dictionary
        and a whole host of games.
      </p>
      <h2 className="about-header">Developer</h2>
      <p className='about-paragraph'>This Application has been designed and built by: </p>
      <div className="developer-info">
        <p className="developer-name">Gerald Mbuthia</p>
        <p className="developer-title">Software Developer</p>
      </div>
      <h2 className="about-header">Repository</h2>
        <p>You can find the repository <a href="https://github.com/geraldombuthia/wordplusplus-v2.0">here</a> </p>
      <BottomNav/>
    </div>
  )
}

export default About

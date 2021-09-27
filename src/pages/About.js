import React from 'react'
import TechStack from '../components/TechStack'
import AboutText from '../components/AboutText'

const About = () => {
    return (
        <div className="aboutContainer">
            <AboutText />
            <TechStack />
        </div>
    )
}

export default About
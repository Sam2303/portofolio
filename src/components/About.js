import React from 'react'
import TechStack from './TechStack'
import AboutText from './AboutText'

const About = () => {
    return (
        <div className="aboutContainer">
            <AboutText />
            <TechStack />
        </div>
    )
}

export default About
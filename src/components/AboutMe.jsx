import React, { useState, useEffect } from 'react'
import { fetchAirtable } from '../api/Airtable'

const AboutMe = () => {
    const [aboutMeText, setAboutMeText] = useState([])
    useEffect(() => { fetchAirtable("About", setAboutMeText) }, []);

    return (
        <div className='text-center mx-3'>
            <h1 className="m-4 display-2">About Me</h1>
            <div className='lead'>
                {aboutMeText.map(paragraph => {
                    return <p>{paragraph.fields.aboutText}</p>
                })}
            </div>
        </div>
    )
}

AboutMe.propTypes = {}

export default AboutMe
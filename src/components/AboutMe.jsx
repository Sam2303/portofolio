import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { fetchAirtable } from '../api/Airtable'

const AboutMe = props => {
    const [aboutMeText, setAboutMeText] = useState([])
    fetchAirtable("About", setAboutMeText)
  return (
    <div className='text-center mx-3'>
        <h1 className="m-4">About Me</h1>
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
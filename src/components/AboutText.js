import React, {useState, useEffect} from 'react'
import {fetchAirtable} from '../api/Airtable';

const AboutText = () => {
    const [aboutText, setAboutText] = useState([]);

    useEffect(() => {
      fetchAirtable("About").then( (res) => {
        setAboutText(res)
      } )  
    }, []);
    return (
        <div className="aboutText">
            <h2>About Me</h2>
            {
              aboutText.map((para) => {
                return <p>{para.fields.aboutText}</p>
              })
            }
        </div>
    )
}

export default AboutText

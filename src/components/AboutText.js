import React, {useState, useEffect} from 'react'
import Airtable from 'airtable';

const AboutText = () => {
    const [aboutText, setAboutText] = useState([]);

    useEffect(() => {
      async function fetchAboutText() {
        var base = new Airtable({
          apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
        }).base(process.env.REACT_APP_AIRTABLE_BASE_ID);
        const table = base("About");
        try {
          const aboutMeText = await table.select({}).all()
          setAboutText(aboutMeText.sort(
            (a, b) => parseFloat(a.fields.id) - parseFloat(b.fields.id)
          ))
        } catch (error) {
          console.error(error);
        }
      }
      fetchAboutText();
    }, []);
    return (
        <div className="aboutText">
            <h2>About Me</h2>
            {
              aboutText.map((para) => {
                console.log(para.fields.aboutText);
                return <p>{para.fields.aboutText}</p>
              })
            }
        </div>
    )
}

export default AboutText

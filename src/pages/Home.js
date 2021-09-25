import React, { useState, useEffect } from "react";
import Airtable from "airtable";
import profilePic from '../resources/profile.jpg'

const Home = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
  
      async function fetchProjects() {
        //   const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY }).base(
        //       process.env.AIRTABLE_BASE_ID
        //   );
        var base = new Airtable({apiKey: 'keyqTF0MYSk8YUp0m'}).base('appLl8YFIJRXggdCw');
          const table = base("Projects");
          try {
            setProjects( await table.select({}).all());
          } catch (error) {
            console.error(error);
          }
        }
        fetchProjects()
    }, []);
    console.log(projects);

    return (
        <div className="homeContainer">
            <div className="welcomeMsg">
                <h2>Hello, I am Sam Parsons</h2>
                <p>Graduate Computer Scientist</p>
                <p>Solution-oriented Software Developer, with a high interest in Web Technologies</p>
                <img src={profilePic} alt="Sam Parsons in there graduation Grown"></img>
            </div> 

            <div className="projects">
                {projects.map((project) => {
                    return (
                        <div>
                            <h3>{project.fields.Name}</h3>
                            <p>{project.fields.Description}</p>
                            <a href={project.fields.Code}>Code</a>
                                                       
                        </div>
                    )
                })}
            </div>
        </div>

       
    )
}

export default Home

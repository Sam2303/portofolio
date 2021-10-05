import React from "react";

const Contact = () => {
  return (
    <div className="contactContainer">
      <h2>Contact Me</h2>
      <div className="linksContainer">
        <a href="mailto:sjp2303@hotmail.com" target="_blank" className="link">
          <i class="far fa-envelope"></i>
          <p>Email</p>
        </a>
        <a href="https://Github.com/Sam2303" target="_blank" className="link">
          <i class="fab fa-github"></i>
          <p>Github</p>
        </a>
        <a
          href="https://www.linkedin.com/in/sam-parsons-31a73720b/"
          target="_blank"
          className="link"
        >
          <i class="fab fa-linkedin"></i>
          <p>LinkedIn</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;

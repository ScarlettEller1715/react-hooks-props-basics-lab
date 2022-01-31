import React from "react";

function Links({ github, linkedin }) {
  return (
    <h3>
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </h3>
  )
}

function BioCreation({ bio }) {
  return (
    bio ? <p>{bio}</p> : null
  )
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <BioCreation bio={props.bio} />
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin}/>
    </div>
  );
}

export default About;

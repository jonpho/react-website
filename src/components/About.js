import React from 'react';
import headShot from '../images/headshot.jpg';

class About extends React.Component {
  render() {
    return (
      <section className="section-1">
        <div className="wrap row">
          <div className="small-12 medium-7 columns">
            <h2>Welcome</h2>
            <p className="text-left">Hello! My name is Jonathan Pho. I'm a Senior Automation Engineer with over 10 years
              of experience in managing and planning QA teams. I have an extensive
              background in manual testing and automated testing. Along with my
              background in testing, I have a proven track record of building,
              managing, mentoring, and guiding QA teams. If you would like to know
              more about my professional experience please feel free to look at my
              <a href="https://www.linkedin.com/in/jonpho" target="_blank">LinkedIN</a>
              profile for more information.
            </p>
            <p className="text-left">The main point of this site is to update my skills and knowledge of
              coding while sharing my code samples, or my experiences in golfing and QA.
              In recent years coding has been a big part of my career and my goals.
              It's a great skill to have and I hope to branch into more software
              engineering in the future.
            </p>
          </div>

          <div className="small-0 medium-4 columns">
            <img className="thumbnail profile-thumbnail" alt="profile" src={headShot} />
          </div>
        </div>
      </section>
    );
  }
}

export default About;
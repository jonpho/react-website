import React from 'react';
import headShot from '../images/headshot.jpg';

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h2 className="text-center">Welcome</h2>
            <p className="text-left">Hello! My name is Jonathan Pho. I'm a Software Engineer in Test with over 10 years
              of experience in managing and planning QA teams. I have an extensive background in automated testing and
              manual testing. Along with my background in testing, I have a proven track record of building, managing,
              mentoring, and guiding QA teams. If you would like to know more about my professional experience please
              feel free to checkout my Social Network links above and contact me.
            </p>
            <p className="text-left">The main point of this site is to update my skills and knowledge of coding. In
              recent years coding has been a big part of my career and my goals. It's a great skill to have and I hope
              to branch into more software engineering in the future.
            </p>
          </div>
          <div className="col-4">
            <img className="img-thumbnail" alt="profile" src={headShot} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
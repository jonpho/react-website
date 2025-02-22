import React from 'react';
import headShot from '../images/headshot.jpg';

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h2 className="text-center">Welcome</h2>
            <p className="text-left">Hello! I’m Jonathan Pho, a seasoned Senior Software Engineer with a wealth of experience in developing
              robust and scalable backend solutions using Ruby on Rails, TypeScript, and Python. My expertise lies in designing and implementing
              efficient systems that cater to complex business needs, with a particular focus on crafting and managing API endpoints that enable
              seamless integration across various services. I specialize in creating and optimizing CI/CD pipelines to ensure rapid and reliable
              deployment processes, and I am adept at integrating QA automation to maintain high standards of code quality and performance.
              Additionally, my background includes working with chatbots, where I leverage advanced technologies to enhance user interactions
              and streamline workflows.
            </p>
            <p className="text-left">In my role, I thrive on solving intricate technical challenges and driving improvements through automation
              and intelligent system design. My approach is centered around optimizing development workflows and fostering a collaborative environment
              where best practices are embraced. Whether I’m fine-tuning backend architectures, designing and managing API endpoints, automating testing
              procedures, or exploring new functionalities in chatbot development, I am committed to delivering high-impact solutions that push the
              boundaries of technology and drive business success.
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
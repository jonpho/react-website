import React from 'react';
import headShot from '../images/headshot.jpg';

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h2 className="text-center">Welcome</h2>
            <p className="text-left">I'm Jonathan Pho, a seasoned consultant serving as a Senior Software Engineer in Test, boasting a decade of 
            dedicated expertise in orchestrating and optimizing QA Automation teams. My proficiency encompasses both automated and manual testing, 
            anchored by a well-documented track record of successfully conceptualizing, administering, nurturing, and steering QA Automation teams. 
            For a more comprehensive insight into my professional journey, I cordially invite you to explore my linked social network profiles and 
            extend an open invitation for any inquiries you may have.
            </p>
            <p className="text-left">In my role as a Software Development Consultant, I partner with clients to design, develop, and deploy scalable 
            and reliable software solutions utilizing a versatile technology stack that includes Ruby, Java, Python, AWS, Selenium, Cypress, Playwright, 
            and Google BigQuery. With over 15 years of diverse engineering experience spanning roles from Software Engineering to Automation Engineering 
            to QA, my core competencies encompass the creation and upkeep of automation frameworks, proficient debugging and issue resolution, seamless 
            integration of cloud services, establishment of robust CI/CD pipelines, and adept leadership and mentorship of teams. My unwavering dedication 
            lies in delivering high-quality software that not only aligns with but exceeds the needs and expectations of users and stakeholders. I maintain 
            a constant appetite for learning new technologies and tools to continually enhance my skills and elevate my productivity.
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
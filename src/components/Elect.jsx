import React from 'react';
import headShot from '../images/headshot.jpg';

class Elect extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h2 className="text-center">Welcome</h2>
            <p className="text-left">Dear Jordan Residents,</p>
            <p className="text-left">Let me start by introducing myself, my name is Jonathan Pho and I along with my wife Sunny and daughter Olivia
              have been residents of the Jordan community for over a decade now. And today I am proud to announce that I am running for Jordan City Council.
            </p>
            <p className="text-left">Since moving here in 2012 I’ve seen this city grow in the last decade while keeping its identity and small town feel. This is what makes
              our community unique from other cities in the area. Our residents are always looking out for each other and willing to give each other a
              helping hand when in need. Our family has always felt welcomed and safe from the start while living here. This is what makes me feel excited
              to give back to the community and run for City Council.
            </p>
            <p className="text-left">My goal would be to find ways to attract more businesses to keep up with our steady growth while being smart with our taxes and keeping it low.
              It’s a balancing act that I believe our council has done a great job so far with and it would be honor in the up coming years to be a part of.
              But the most important part of all of this is keeping our friendly small town feel.
            </p>
            <h5 className="text-left">For More Information:</h5>
            <p className="text-left">Please feel free to listen in on my podcast interview with The Hub News. Or checkout my Facebook Campaign Page and I encourage you to follow and like my posts there. Please also feel free to reach out to me on there.</p>
            <ul>
              <li><a href="https://www.thehubnewsmn.com/p/the-hub-podcast-3-jordan-city-council">Podcast Interview with The Hub News</a></li>
                <li><a href="https://www.facebook.com/JonathanPhoForCityCouncil">Facebook Campaign Page</a></li>
            </ul>
            <p className="text-left">Best Regards,<br />
              Jonathan Pho
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

export default Elect;

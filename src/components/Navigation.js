import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <div className="row">
      <div className="columns">
        <ul className="dropdown menu">
          <li>
            <a href="#">Social Media</a>
            <ul className="menu">
              <li><a href="https://github.com/jonpho" target="_blank">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/jonpho" target="_blank">LinkedIN</a></li>
              <li><a href="https://www.facebook.com/jonpho" target="_blank">Facebook</a></li>
              <li><a href="https://twitter.com/jonathanpho" target="_blank">Twitter</a></li>
              <li><a href="https://www.instagram.com/leftphodead/" target="_blank">Instagram</a></li>
            </ul>
          </li>
        </ul>
      </div>
      </div>
    );
  }
}

export default Navigation;
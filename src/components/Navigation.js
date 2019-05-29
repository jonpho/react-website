import React from 'react';
import menuIcon from '../images/hamburger_menu_icon.png';

class Navigation extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <ul className="nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" href="#"><img src={menuIcon} /></a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="https://github.com/jonpho">GitHub</a>
                <a className="dropdown-item" href="https://www.linkedin.com/in/jonpho">LinkedIN</a>
                <a className="dropdown-item" href="https://www.facebook.com/jonpho">Facebook</a>
                <a className="dropdown-item" href="https://twitter.com/jonathanpho">Twitter</a>
                <a className="dropdown-item" href="https://www.instagram.com/leftphodead/">Instagram</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
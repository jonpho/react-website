import React from 'react';
import Navigation from './Navigation';

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron-fluid">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-10" />
              <div className="col-2">
                <Navigation />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
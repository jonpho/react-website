import React from 'react';

class Footer extends React.Component {

  currentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  render() {
    return (
      <div className="section-footer text-left">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>Copyright {this.currentYear()}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
import React from 'react';

class Footer extends React.Component {

  currentYear() {
    const date = new Date();
    return date.getFullYear();
  }

  render() {
    return (
      <footer className="section-footer">
        <div className="wrap row">
          <div className="small-12 medium-3 columns">
            <p>Copyright {this.currentYear()}</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
import React, { Component } from 'react';

export default class Sidebar extends Component {

  state = {
    options: [
      { text: 'doNothing', value: 'doNothing' },
      { text: 'openModal', value: 'openModal' }
    ],
    open: false
  };

  onClose = () => this.setState({ open: false });
  onChange = (selected) => {

  }

  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="brand-img" style={{ backgroundImage: 'url(images/brandlogo2.jpg)' }} />
              <h1 id="colorlib-logo"><a href="index.html">HUMMA FITNESS & TRAINING</a></h1>
              <span className="brand"
                style={{ color: "red", fontWeight: "bold" }}>DARE TO BE GREAT</span>
            </div>
            <br></br>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                  <li><a href="#offer" data-nav-section="offer">What We Offer</a></li>
                  <li><a href="#information" data-nav-section="information">Information</a></li>
                  <li><a href="#contact" data-nav-section="contact">Contact Us</a></li>
                </ul>
              </div>
            </nav>

            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="mailto:email@address.com" target="_blank" rel="noopener noreferrer"><i className="icon-mail5" /></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>&copy;All rights reserved | Marie Allpress - {new Date().getUTCFullYear()} | Built with: <a href="https://colorlib.com/wp/templates/">Colorlib</a> </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}

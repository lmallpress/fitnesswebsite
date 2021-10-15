import React, { Component } from 'react';


export default class Information extends Component {

  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="information">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Information</span>
                <h2 className="colorlib-heading animate-box">About Us</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="information-centered">
                  <div className="information-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="information-entry-inner">
                      <div className="information-label">
                        <h2>All the things about the gym</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>
                  </div>
                  <div className="information-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="information-entry-inner">

                      <div className="information-label">
                        <h2>FAQs</h2>
                        <p>Every answer you ever wanted, even the ones you didn't know you needed</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>
                  </div>
                  <div className="information-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="information-entry-inner">

                      <div className="information-label">
                        <h2>Meet the trainers</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </div>
                    </div>
                  </div>

                  <div className="information-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="information-entry-inner">

                      <div className="information-label">
                        <h2>Try Us for Free</h2>
                        <form>
                          <div>
                            <input xs={12} md={6}
                              type="email" id="loginEmail" placeholder="Enter Email"
                            />
                          </div>
                          <div>
                            <input xs={12} md={6}
                              type="password" id="loginPassword" placeholder="Password"
                            />
                          </div>
                          <div class="form-row">
                            <button className="btn btn-secondary btn-sm ml-auto" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary btn-sm ml-1">Sign Up</button>
                          </div>
                        </form>

                      </div>
                    </div>
                  </div>



                {/*  <div className="information-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="information-entry-inner">
                      <div className="information-icon color-none">
                      </div>
                    </div>
                  </div>  */}
                </div>
              </div>
            </div>
          </div>


        </section>
      </div>
    )
  }
}

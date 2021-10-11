import React, { Component } from 'react';

export default class Offer extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-offer" data-section="offer">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What We Offer</span>
                                <h2 className="colorlib-heading animate-box">Resources</h2>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{ backgroundImage: 'url(images/boxing.jpg)' }} >
                                    <div className="desc">
                                        <div className="con">
                                            <h3>Boxing</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <div class="project" style={{ backgroundImage: 'url(images/equip.jpg)' }} >
                                    <div className="desc">
                                        <div className="con">
                                            <h3>Fitness Equipment</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <div class="project" style={{ backgroundImage: 'url(images/trainers.jpg)' }} >
                                    <div className="desc">
                                        <div className="con">
                                            <h3>Personal Training</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 animate-box" data-animate-effect="fadeInBottom">
                                <div className="project" style={{ backgroundImage: 'url(images/membership.jpg)' }} >
                                    <div className="desc">
                                        <div className="con">
                                            <h3>Membership</h3> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        )
    }
}


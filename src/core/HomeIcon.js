import React from 'react';
import "./../CSS/HomeIcon.css";

export default function HomeIcon() {
    return (
        <section className="homeicon-section mb-3 pb-5 pt-5">
            <div className="container">
                <div className="row homeicon-row">

                    <div className="col-sm-12 col-md-4 mb-3">
                        <div className="homeicon-card">
                            <i className="fa fa-map" aria-hidden="true"></i>
                            <h2 className="homeicon-title">Discover Destinations</h2>
                            <p className="homeicon-subtitle">Find the perfect adventure for your next journey.</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 mb-3">
                        <div className="homeicon-card">
                            <i className="fa fa-suitcase" aria-hidden="true"></i>
                            <h2 className="homeicon-title">Plan Your Trip</h2>
                            <p className="homeicon-subtitle">Easy planning options tailored for every traveler.</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-4 mb-3">
                        <div className="homeicon-card">
                            <i className="fa fa-car" aria-hidden="true"></i>
                            <h2 className="homeicon-title">Travel Smart</h2>
                            <p className="homeicon-subtitle">Make your travel smooth with Travello's smart tools.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

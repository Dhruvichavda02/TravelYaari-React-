import React from 'react'
import "./../CSS/HomeIcon.css";

export default function HomeIcon() {
    return (
        <section className="mb-3 pb-5 pt-5" style={{ background: "#ebeae8" }}>
            <div className="container">
                <div className="row">

                    {/* 1️⃣ Discover Destinations */}
                    <div className="col-sm-12 col-md-4 mb-2">
                        <div className="card-body text-center homeicon-shadow rounded bg-white">
                            <i className="fa fa-globe" aria-hidden="true"></i>
                            <h2 className="h2 m-2">Discover Destinations</h2>
                            <p>Find the perfect place for your next trip.</p>
                        </div>
                    </div>

                    {/* 2️⃣ Plan Your Journey */}
                    <div className="col-sm-12 col-md-4 mb-2">
                        <div className="card-body text-center homeicon-shadow rounded bg-white">
                            <i className="fa fa-route" aria-hidden="true"></i>
                            <h2 className="h2 m-2">Plan Your Journey</h2>
                            <p>Curated travel packages just for you.</p>
                        </div>
                    </div>

                    {/* 3️⃣ Book Your Adventure */}
                    <div className="col-sm-12 col-md-4 mb-2">
                        <div className="card-body text-center homeicon-shadow rounded bg-white">
                            <i className="fa fa-suitcase-rolling" aria-hidden="true"></i>
                            <h2 className="h2 m-2">Book Your Adventure</h2>
                            <p>Secure your trips easily and affordably.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

import React from 'react';
import Layout from './Layout';
import aboutimg from './../image/about.png';
import { Link } from "react-router-dom";
import '../CSS/About.css'; // Add CSS file for styling

export default function About() {
  return (
    <Layout>
      <div className="about-container">
        {/* Hero Section */}
        <div className="about-hero">
          <img src={aboutimg} alt="About Travello" className="about-image" />
          <h1 className="about-title">About Travello</h1>
        </div>

        {/* Content Section */}
        <div className="about-content">
          <h2>Our Mission</h2>
          <p>
            Travello is dedicated to making travel experiences seamless, exciting, 
            and memorable. We connect travelers with the best tours, packages, and 
            experiences, helping them explore new destinations without any hassle.
          </p>

          <h2>Who We Are</h2>
          <p>
            We are a team of passionate travel enthusiasts and tech experts who aim 
            to simplify the way people book trips. Our platform offers reliable 
            packages, secure payments, and real-time updates for a stress-free journey.
          </p>

          <h2>Why Choose Travello?</h2>
          <ul>
            <li>Hand-picked travel packages at competitive prices.</li>
            <li>Easy booking and payment process.</li>
            <li>Dedicated customer support for all your travel needs.</li>
            <li>Trusted by thousands of happy travelers.</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            Have questions or want to work with us? Reach out at 
            <a href="mailto:support@travello.com"> support@travello.com</a> 
            or call us at <strong>+91 12345 67890</strong>.
          </p>
        </div>
      </div>
    </Layout>
  );
}

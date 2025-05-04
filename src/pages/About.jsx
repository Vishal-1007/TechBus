import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <section className="about-main">
        <div className="container">
          <h1>About Us</h1>
          <p>Information about the company will go here...</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
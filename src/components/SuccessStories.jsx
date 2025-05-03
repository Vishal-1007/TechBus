import React from 'react';

const SuccessStories = () => {
  return (
    <section className="success-stories">
      <div className="container">
        {/* Heading and Subheading */}
        <h2>Hear <span>Travel success stories</span></h2>
        <p>Only travelers who have travelled those cities can help you get answers</p>

        {/* Video Stories Section */}
        <div className="video-stories">
          {[...Array(4)].map((_, index) => (
            <div className="video-item" key={index}>
              <div className="video-placeholder">
                <img src="play-icon.png" alt="Play Icon" className="play-icon" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur. Porttitor molestie.</p>
              <span>170K views</span>
            </div>
          ))}
        </div>

        {/* Browse All Videos Button */}
        <button className="browse-videos">Browse All Videos</button>
      </div>
    </section>
  );
};

export default SuccessStories;

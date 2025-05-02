import React from 'react';

const SuccessStories = () => {
  return (
    <section className="success-stories">
      <div className="container">
        <div className="hotels-list">
          <div className="hotel-item">
            <p>Lorem ipsum dolor sit amet</p>
            <p>Bristol, United Kingdom</p>
          </div>
          
          <div className="hotel-item">
            <p>Lorem ipsum dolor sit amet</p>
            <p>York, United Kingdom</p>
          </div>
          
          <div className="hotel-item">
            <p>Lorem ipsum dolor sit amet consectetur. Mattis proin.</p>
            <p>Canada, United Kingdom</p>
          </div>
          
          <div className="hotel-item">
            <p>Lorem ipsum dolor sit amet</p>
            <p>London, United Kingdom</p>
          </div>
        </div>
        
        <h2>Hear Travel success stories</h2>
        <p>Only travelers who have travelled those cities can help you get answers</p>
        
        <div className="video-stories">
          <div className="video-item">
            <div className="video-placeholder">a</div>
            <p>Lorem ipsum dolor sit amet consectetur. Porttitor molestie.</p>
            <span>170K views</span>
          </div>
          
          <div className="video-item">
            <div className="video-placeholder">b</div>
            <p>Lorem ipsum dolor sit amet consectetur. Sed montes magna.</p>
            <span>170K views</span>
          </div>
          
          <div className="video-item">
            <div className="video-placeholder">c</div>
            <p>Lorem ipsum dolor sit amet consectetur. Porttitor molestie.</p>
            <span>170K views</span>
          </div>
        </div>
        
        <button className="browse-videos">Browse All Videos</button>
      </div>
    </section>
  );
};

export default SuccessStories;
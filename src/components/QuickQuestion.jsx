import React, { useState } from 'react';
import whatsappImage from '../assets/images/whatsapp.png'; // Import WhatsApp side image

const QuickQuestion = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    question: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="quick-question">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-content">
            <h1>Get a WhatsApp response within 24 hrs</h1>
            <p className="subtext">Your question will be answered by experienced travellers</p>
            
            <div className="divider"></div>
            
            <form className="question-form">
              <div className="form-group">
                <h2>Full Name</h2>
                <input 
                  type="text" 
                  name="fullName" 
                  placeholder="Enter Name" 
                  value={formData.fullName}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <h2>WhatsApp Number</h2>
                <div className="whatsapp-input">
                  <span className="verified-icon">✅</span>
                  <input 
                    type="text" 
                    name="whatsappNumber" 
                    placeholder="#STAKEZED"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <h2>Write your question</h2>
                <textarea 
                  name="question" 
                  placeholder="Write your question..." 
                  value={formData.question}
                  onChange={handleChange}
                  className="form-textarea"
                ></textarea>
                <p className="notice">This conversation moves to WhatsApp for easy access.</p>
              </div>
              
              <button type="submit" className="send-btn">
                Send Question
              </button>
            </form>
          </div>
          
          <div className="image-side">
            <img src={whatsappImage} alt="WhatsApp" className="whatsapp-side-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickQuestion;
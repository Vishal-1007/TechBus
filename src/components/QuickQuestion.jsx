import React, { useState } from 'react';

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
        <h2>Have a Quick Question?</h2>
        <p>Get a WhatsApp response within 24 hrs</p>
        <p>Your question will be answered by experienced travelers</p>
        
        <form className="question-form">
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              name="fullName" 
              placeholder="Enter Name" 
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label>WhatsApp Number</label>
            <div className="whatsapp-input">
              <span>91</span>
              <input 
                type="text" 
                name="whatsappNumber" 
                value={formData.whatsappNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Write your question</label>
            <textarea 
              name="question" 
              placeholder="Write your question..." 
              value={formData.question}
              onChange={handleChange}
            ></textarea>
          </div>
          
          <p className="notice">This conversation moves to WhatsApp for easy access.</p>
          
          <button type="submit" className="send-btn">Send Question →</button>
        </form>
      </div>
    </section>
  );
};

export default QuickQuestion;
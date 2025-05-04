import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpField, setShowOtpField] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    setPhone(value);
    
    if (errors.phone) {
      setErrors({ ...errors, phone: null });
    }
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    setOtp(value);
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    
    if (!validatePhone(phone)) {
      setErrors({ phone: 'Please enter a valid 10-digit phone number' });
      return;
    }

    // In a real app, you would call your backend API to send OTP here
    console.log('OTP sent to:', phone);
    setShowOtpField(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!otp) {
      setErrors({ otp: 'Please enter the OTP' });
      return;
    }

    // In a real app, you would verify OTP with your backend here
    console.log('Verifying OTP:', otp, 'for phone:', phone);
    
    // For demo purposes, we'll just redirect after "verification"
    navigate('/'); // Redirect after successful login
  };

  return (
    <AuthForm 
      title="Login with Phone Number" 
      onSubmit={showOtpField ? handleLogin : handleSendOtp}
    >
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
          required
          pattern="[0-9]{10}"
          maxLength="10"
          disabled={showOtpField}
          className={errors.phone ? 'error' : ''}
        />
        {errors.phone && <span className="error-message">{errors.phone}</span>}
      </div>

      {showOtpField && (
        <div className="form-group">
          <label htmlFor="otp">Enter OTP</label>
          <input
            type="tel"
            id="otp"
            value={otp}
            onChange={handleOtpChange}
            required
            pattern="[0-9]{6}"
            maxLength="6"
            placeholder="6-digit OTP"
            className={errors.otp ? 'error' : ''}
          />
          {errors.otp && <span className="error-message">{errors.otp}</span>}
          <div className="otp-resend">
            Didn't receive OTP? <button 
              type="button" 
              className="resend-link"
              onClick={handleSendOtp}
            >
              Resend
            </button>
          </div>
        </div>
      )}

      <button type="submit" className="auth-button">
        {showOtpField ? 'Login' : 'Send OTP'}
      </button>

      <div className="auth-footer">
        Don't have an account? <Link to="/register">Register</Link>
      </div>
    </AuthForm>
  );
};

export default Login;
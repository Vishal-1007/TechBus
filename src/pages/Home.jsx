import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import LoginPopup from '../components/auth/LoginPopup';
import BlogsSection from '../components/BlogsSection';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HotelsSection from '../components/HotelsSection';
import LocalExperts from '../components/LocalExperts';
import QuickQuestion from '../components/QuickQuestion';
import SuccessStories from '../components/SuccessStories';
import TravelerBenefits from '../components/TravelerBenefits';
import TripPlanning from '../components/TripPlanning';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const hidePopup = localStorage.getItem('hideLoginPopup');

    // Only show popup on home page, and only if the flag is not set
    if (currentPath === '/' && !hidePopup) {
      setShowPopup(true);
    } else {
      setShowPopup(false); // Hide on /login or /register or if user opted out
    }
  }, [location]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="home-page">
      <Header />
      <BookingForm />
      <TravelerBenefits />
      <TripPlanning />
      <LocalExperts />
      <QuickQuestion />
      <HotelsSection />
      <SuccessStories />
      <BlogsSection />
      <Footer />

      {showPopup && <LoginPopup onClose={handleClosePopup} />}
    </div>
  );
};

export default Home;

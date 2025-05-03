import React from 'react';
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
    </div>
  );
};

export default Home;

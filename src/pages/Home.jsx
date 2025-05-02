import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BookingForm from '../components/BookingForm';
import TravelerBenefits from '../components/TravelerBenefits';
import TripPlanning from '../components/TripPlanning';
import LocalExperts from '../components/LocalExperts';
import QuickQuestion from '../components/QuickQuestion';
import HotelsSection from '../components/HotelsSection';
import SuccessStories from '../components/SuccessStories';
import BlogsSection from '../components/BlogsSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <HeroSection />
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
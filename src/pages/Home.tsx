import React from 'react';
import Hero from '../components/Hero';
import Philosophy from '../components/Philosophy';
import Mission from '../components/Mission';
import Stats from '../components/Stats';
import ExecutiveClasses from '../components/ExecutiveClasses';
import FeaturedCourses from '../components/FeaturedCourses';
import WhyChooseLSEM from '../components/WhyChooseLSEM';
import Events from '../components/Events';
import YouTubeClasses from '../components/YouTubeClasses';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import News from '../components/News';
import Books from '../components/Books';
import WhatsAppClasses from '../components/WhatsAppClasses';
import EnquiryForm from '../components/EnquiryForm';
import MailingList from '../components/MailingList';

function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Mission />
      <Stats />
      <ExecutiveClasses />
      <FeaturedCourses />
      <WhyChooseLSEM />
      <Events />
      <YouTubeClasses />
      <Testimonials />
      <FAQ />
      <News />
      <Books />
      <WhatsAppClasses />
      <EnquiryForm />
      <MailingList />
    </>
  );
}

export default Home;
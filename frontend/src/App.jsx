import React from 'react';
import Hero from "./components/Hero"
import About from './components/About';
import Theme from './components/Theme';
import Carousel from './components/Slider';
import Navbar from './components/Navbar';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import PrizesSection from './components/prizes';
import SponsorsSection from './components/Sponsors';
import TeamMain from './components/team';

function App() {
  return (
    <>
    {/* <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-900 via-black to-gray-900 text-white text-center overflow-hidden max-md:w-full">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500 opacity-25 rounded-full blur-3xl top-16 left-16 animate-slow-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-600 opacity-25 rounded-full blur-3xl bottom-16 right-16 animate-slow-pulse"></div>
        <div className="absolute w-72 h-72 bg-cyan-500 opacity-30 rounded-full blur-3xl top-1/2 left-1/4 transform -translate-y-1/2 animate-slow-pulse"></div>
      </div>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      </div> */}

      {/* Additional Sections */}
      <div className="bg-black text-white">
        <Navbar />
        <Hero />
        <About />
        <Carousel />
        <Theme />
        <FAQ />
        <PrizesSection />
        <SponsorsSection />
        <TeamMain />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;

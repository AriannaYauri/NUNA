import React from 'react';
import { Play, Lock } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Features from './components/Features';
import UpcomingDestinations from './components/UpcomingDestinations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Destinations />
      <Features />
      <UpcomingDestinations />
      <Footer />
    </div>
  );
}

export default App;
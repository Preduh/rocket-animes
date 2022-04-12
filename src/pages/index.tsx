import type { NextPage } from 'next';
import React from 'react';
import LetterNavbar from '../components/LetterNavbar';
import Navbar from '../components/Navbar';
import Popular from '../components/Popular';
import WeeklyRecommendation from '../components/WeeklyRecommendation';

const Home: NextPage = () => (
  <div className="w-full h-full bg-light-gray">
    <Navbar />
    <div className="w-full h-full md:px-16">
      <div className="w-full h-full bg-dark-gray px-4">
        <LetterNavbar />
        <WeeklyRecommendation />
        <Popular />
      </div>
    </div>
  </div>
);

export default Home;

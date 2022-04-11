import React from 'react';
import LetterNavbar from './LetterNavbar';
import WeeklyRecommendation from './WeeklyRecommendation';

function Content() {
  return (
    <div className="w-full h-full md:px-16">
      <div className="w-full h-screen bg-dark-gray px-4">
        <LetterNavbar />
        <WeeklyRecommendation />
      </div>
    </div>
  );
}

export default Content;

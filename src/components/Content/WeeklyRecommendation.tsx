import React from 'react';

function WeeklyRecommendation() {
  return (
    <div className="mt-4">
      <div className="flex justify-between text-white font-roboto">
        <h2 className="text-base sm:text-xl pb-4">Recomendações da semana</h2>
        <button
          type="button"
          className="text-xs bg-white hover:opacity-60 transition-all duration-200 text-dark-gray font-bold flex items-center justify-center h-min p-1 rounded-md"
        >
          <p className="">VER MAIS</p>
        </button>
      </div>

      <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-6 h-36 lg:h-64 md:h-40 sm:h-36">
        <div className="bg-light-gray rounded-md" />
        <div className="bg-light-gray rounded-md" />
        <div className="bg-light-gray rounded-md" />
        <div className="bg-light-gray rounded-md hidden sm:inline" />
        <div className="bg-light-gray rounded-md hidden sm:inline" />
      </div>
    </div>
  );
}

export default WeeklyRecommendation;

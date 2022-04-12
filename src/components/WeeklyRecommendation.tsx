import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import AnimeCard from './AnimeCard';

function reduceAnimeTitle(title: string, count: number) {
  return title.slice(0, count) + (title.length > count ? '...' : '');
}

function WeeklyRecommendation() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
    ],
  };

  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.jikan.moe/v4/recommendations/anime')
      .then(response => setRecommendations(response.data.data));
  }, []);

  return (
    <div className="mt-4">
      <div className="flex justify-between text-white font-roboto">
        <h2 className="text-base sm:text-xl pb-4 font-medium">
          Recomendações da semana
        </h2>
        <button
          type="button"
          className="text-xs bg-light-pink hover:opacity-60 transition-all duration-200 text-white font-bold flex items-center justify-center h-min p-1 rounded-md"
        >
          <p className="">VER MAIS</p>
        </button>
      </div>
      <Slider {...settings}>
        {recommendations.map((anime: any) => (
          <AnimeCard
            key={anime.mal_id}
            imageUrl={anime.entry[0].images.jpg.image_url}
            title={reduceAnimeTitle(anime.entry[0].title, 25)}
          />
        ))}
      </Slider>
      <hr className="border-light-gray w-full" />
    </div>
  );
}

export default WeeklyRecommendation;

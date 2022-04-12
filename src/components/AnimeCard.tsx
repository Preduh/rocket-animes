import React from 'react';

type Props = {
  imageUrl: string;
  title: string;
};

function AnimeCard({ imageUrl, title }: Props) {
  return (
    <div className="mx-2">
      <div className="h-40 md:h-48 lg:h-72 flex">
        <img src={imageUrl} alt="anime cover" className="rounded-md w-full" />
      </div>
      <h3 className="text-white break-words">{title}</h3>
    </div>
  );
}

export default AnimeCard;

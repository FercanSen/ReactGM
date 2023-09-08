import React from 'react';

const GenreList = ({ genres, selectedGenre, onSelect }) => {
  return (
    <div>
      {genres.map((genre, index) => (
        <button
          key={index}
          onClick={() => onSelect(genre)}
          className={genre === selectedGenre ? 'selectedGenre' : ''}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreList;

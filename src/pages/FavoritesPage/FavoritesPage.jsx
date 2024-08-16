import React from 'react';
import AdvertCard from '../../components/AdvertCard/AdvertCard.jsx';

const FavoritesPage = () => {
  const [favorites, setFavorites] = React.useState(() => JSON.parse(localStorage.getItem('favorites')) || []);
  
  if (favorites.length === 0) {
    return <p>No favorite campers added yet.</p>;
  }

  return (
    <div>
      {favorites.map(advert => (
        <AdvertCard
          key={advert._id}
          advert={advert}
          isFavorite={true}
          onFavoriteToggle={() => {
            const updatedFavorites = favorites.filter(fav => fav !== advert._id);
            setFavorites(updatedFavorites);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
          }}
        />
      ))}
    </div>
  );
};

export default FavoritesPage;

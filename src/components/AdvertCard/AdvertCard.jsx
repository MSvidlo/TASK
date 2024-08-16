import React from 'react';

const AdvertCard = ({ advert, onFavoriteToggle, onShowMore }) => {
  const { id, name, price, location, gallery, isFavorite } = advert;

  return (
    <div className="advert-card">
      <img src={gallery[0]} alt={name} className="advert-card__image" />
      <h3 className="advert-card__title">{name}</h3>
      <p className="advert-card__location">{location}</p>
      <p className="advert-card__price">{price.toLocaleString('en-US')},00 UAH</p>
      <button 
        className={`advert-card__favorite-button ${isFavorite ? 'favorite' : ''}`}
        onClick={() => onFavoriteToggle(id)}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
      <button onClick={() => onShowMore(id)} className="advert-card__more-button">
        Show more
      </button>
    </div>
  );
};

export default AdvertCard;
import React from 'react';
import AdvertCard from '../../components/AdvertCard/AdvertCard.jsx';
import Modal from '../../components/Modal/Modal.jsx';
import { fetchAllCampers } from '../../api.js';

const CatalogPage = () => {
  const [adverts, setAdverts] = React.useState([]);
  const [modalAdvert, setModalAdvert] = React.useState(null);
  const [favorites, setFavorites] = React.useState(() => JSON.parse(localStorage.getItem('favorites')) || []);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);

  const loadAdverts = async (pageNum = 1) => {
    setLoading(true);
    try {
      const data = await fetchAllCampers(pageNum);
      setAdverts(prev => [...prev, ...data]);
    } catch (error) {
      console.error('Failed to load adverts:', error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    loadAdverts(page);
  }, [page]);

  const handleFavoriteToggle = (id) => {
    setFavorites((prev) => {
      const newFavorites = prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id];
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const handleShowMore = (advert) => setModalAdvert(advert);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      {adverts.map(advert => (
        <AdvertCard
          key={advert._id}
          advert={advert}
          isFavorite={favorites.includes(advert._id)}
          onFavoriteToggle={() => handleFavoriteToggle(advert._id)}
          onShowMore={() => handleShowMore(advert)}
        />
      ))}
      <button onClick={handleLoadMore} disabled={loading}>
        {loading ? 'Loading...' : 'Load more'}
      </button>
      {modalAdvert && <Modal advert={modalAdvert} onClose={() => setModalAdvert(null)} />}
    </div>
  );
};

export default CatalogPage;

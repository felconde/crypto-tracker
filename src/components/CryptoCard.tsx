'use client';

import { useFavorites } from '../store/FavoritesContext';
import { Crypto } from '../types/crypto';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export default function CryptoCard({ crypto }: { crypto: Crypto }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.includes(crypto.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(crypto.id);
    } else {
      addFavorite(crypto.id);
    }
  };

  return (
    <div className={`card ${isFavorite ? 'favorite' : ''}`}>
      <h2>{crypto.name}</h2>
      <p>Price: ${crypto.current_price}</p>
      <div>
        <span onClick={toggleFavorite} className="icon">
          {isFavorite ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      </div>
    </div>
  );
}

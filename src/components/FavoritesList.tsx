'use client';

import { useFavorites } from '../store/FavoritesContext';
import { Crypto } from '../types/crypto';

export default function FavoritesList({ cryptos }: { cryptos: Crypto[] }) {
  const { favorites } = useFavorites();

  const favoriteCryptos = cryptos.filter((crypto) => favorites.includes(crypto.id));

  return (
    <div className="favorites-container">
      <h2>Your Favorites</h2>
      {favoriteCryptos.length > 0 ? (
        <div className="grid">
          {favoriteCryptos.map((crypto) => (
            <div key={crypto.id} className="card">
              <h2>{crypto.name}</h2>
              <p>Price: ${crypto.current_price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorites added yet.</p>
      )}
    </div>
  );
}

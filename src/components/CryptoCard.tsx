'use client';

import { useFavorites } from '../store/FavoritesContext';
import { Crypto } from '../types/crypto';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Link from 'next/link';

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
    <div className="card">
      {/* Link para a página de detalhes da criptomoeda */}
      <Link href={`/crypto/${crypto.id}`}>
        <h2>{crypto.name}</h2>
      </Link>
      <p>Price: ${crypto.current_price}</p>
      <div>
        {/* Ícone de favorito */}
        <span onClick={toggleFavorite} className="icon">
          {isFavorite ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      </div>
    </div>
  );
}

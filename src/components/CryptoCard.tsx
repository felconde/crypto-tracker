'use client';

import { useFavorites } from "@/store/FavoritesContext";
import { Crypto } from "@/types/crypto";
import { Crimson_Pro } from "next/font/google";

export default function CryptoCard({ crypto }: {crypto: Crypto}) {
    const { favorites, addFavorite, removeFavorite} = useFavorites();

    const isFavorite = favorites.includes(crypto.id);


    const toggleFavorite = () => {
        if (isFavorite) {
            removeFavorite(crypto.id);
        } else  {
            addFavorite(crypto.id);
        }
    };

    return (
        <div>
            <h2>{crypto.name}</h2>
            <p>Price: ${crypto.current_price}</p>
            <button onClick={toggleFavorite}>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
        </div>
    )
}

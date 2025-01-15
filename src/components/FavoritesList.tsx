'use client'

import { useFavorites } from "@/store/FavoritesContext"
import { Crypto } from "@/types/crypto"

export default function FavoritesList({ cryptos }: {cryptos: Crypto[]}) {
    const { favorites } = useFavorites();

    const favoritesCryptos = cryptos.filter((crypto) => favorites.includes(crypto.id));

    return (
        <div>
            <h2>Your Favorites</h2>
            { favoritesCryptos.length > 0 ? (
                <ul>
                    {favoritesCryptos.map((crypto) => (
                        <li key={crypto.id}> {crypto.name} </li>
                    ))}
                </ul>

            ) : (
                <p>No favorites added</p>
            )
            
        }
        </div>
    )

}
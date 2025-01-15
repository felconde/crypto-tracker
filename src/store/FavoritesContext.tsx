'use client';

import React, { useContext, createContext, useState} from "react";

type FavoritesContextType = {
    favorites: string[];
    addFavorite: (id: string) => void;
    removeFavorite: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: React.ReactNode}) => {
    const [ favorites, setFavorites] = useState<string[]>([]);

    const addFavorite = (id: string) =>{
        if (!favorites.includes(id)) {
            setFavorites((prev) => [...prev, id]);
        }
    };

    const removeFavorite = (id: string) => {
        setFavorites((prev) => prev.filter((fav) => fav !== id));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite}}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context){
        throw new Error('useFavorites must be used within a FavoritesProvider')
    }
    return context;
}

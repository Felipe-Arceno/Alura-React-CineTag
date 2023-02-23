import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favoritos";

export default function FavoritesProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorite, setFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoriteContext() {
  const { favorite, setFavorite } = useContext(FavoritesContext);

  function addFavorite(newFavorite) {
    console.log(newFavorite);
    const repeatedFavorite = favorite.some(
      (item) => item.id === newFavorite.id
    );
    console.log(repeatedFavorite);
    let newList = [...favorite];
    console.log(newList);
    if (!repeatedFavorite) {
      newList.push(newFavorite);
      return setFavorite(newList);
    }

    //newList.splice(newList.filter((fav) => fav.id !== newFavorite.id));
    newList = favorite.filter((fav) => fav.id !== newFavorite.id);
    return setFavorite(newList);
  }

  return {
    favorite,
    addFavorite,
  };
}

export default function getFavoriteSymbolsFromStorage(){  
  const value = localStorage.getItem("favoriteSymbols");
  return value ? JSON.parse(value) : [];
}
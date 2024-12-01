import React, { createContext, useState } from "react";

// Create a context for managing state
export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [bag, setBag] = useState([]);
  const [searchResults, setSearchResults] = useState([]); // Search results state

  // Function to add a product to the bag and remove it from the wishlist
  const addToBag = (product) => {
    setBag([...bag, product]);
    setWishlist(wishlist.filter((item) => item.id !== product.id));
  };

  // Function to remove a product from the bag
  const removeFromBag = (product) => {
    setBag(bag.filter((item) => item.id !== product.id));
  };

  // Function to add a product to the wishlist and remove it from search results
  const addToWishlist = (product) => {
    // Add product to wishlist
    setWishlist([...wishlist, product]);

    // Remove product from search results
    setSearchResults((prevResults) =>
      prevResults.filter((item) => item.id !== product.id)
    );
  };

  // Function to remove a product from the wishlist
  const removeFromWishlist = (product) => {
    setWishlist(wishlist.filter((item) => item.id !== product.id));
  };

  // Function to set search results (for example, after a search query is made)
  const setSearchQuery = (results) => {
    setSearchResults(results);
  };

  return (
    <StoreContext.Provider
      value={{
        wishlist,
        bag,
        searchResults,
        addToBag,
        removeFromBag,
        addToWishlist,
        removeFromWishlist,
        setSearchQuery, // Make setSearchQuery available for updating search results
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

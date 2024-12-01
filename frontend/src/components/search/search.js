import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import { StoreContext } from "../StoreContext/StoreContext";

function SearchResults({ query }) {
  const { addToWishlist, searchResults, setSearchQuery } =
    useContext(StoreContext);

  // Sample data
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sampleProducts = {
    "men's wear": [
      {
        id: 1,
        name: "Tokyo Talkies",
        price: "₹200",
        image: "/assets/img1.png",
      },
      {
        id: 2,
        name: "Roadstar t shirt",
        price: "₹1200",
        image: "/assets/6.png",
      },
      {
        id: 3,
        name: "PUMA ",
        price: "₹700",
        image: "/assets/00009_00.png",
      },
      {
        id: 4,
        name: "Printed Round Neck",
        price: "₹600",
        image: "/assets/3.jpg",
      },
      {
        id: 5,
        name: "Casual DNMX",
        price: "₹500",
        image: "/assets/img1.png",
      },
      {
        id: 6,
        name: "U.S Pollo",
        price: "₹800",
        image: "/assets/img4.jpg",
      },
      {
        id: 7,
        name: "Peter England",
        price: "₹700",
        image: "/assets/img3.jpg",
      },
      {
        id: 8,
        name: "Metronaut",
        price: "₹800",
        image: "/assets/img1.png",
      },
      {
        id: 9,
        name: "Slim fit polo tshirt",
        price: "₹500",
        image: "/assets/img1.png",
      },
      {
        id: 10,
        name: "Crew neck tshirt",
        price: "₹500",
        image: "/assets/img1.png",
      },
    ],
    "women's wear": [
      {
        id: 1,
        name: "Women's Top 1",
        price: "₹500",
        image: "/assets/00010_00.png",
      },
      {
        id: 2,
        name: "Women's Top 2",
        price: "₹350",
        image: "/assets/00002_00.png",
      },
      {
        id: 3,
        name: "Women's Top 3",
        price: "₹380",
        image: "/assets/00000_00.png",
      },
      {
        id: 4,
        name: "U.S POLO",
        price: "₹350",
        image: "/assets/11791_00.jpg",
      },
      {
        id: 5,
        name: "DNMX",
        price: "₹400",
        image: "/assets/00030_00.png",
      },
      {
        id: 6,
        name: "Stylish Women's T Shirt",
        price: "₹400",
        image: "/assets/img4.jpg",
      },
      {
        id: 7,
        name: "Crew Neck T shirt",
        price: "₹400",
        image: "/assets/11351_00.jpg",
      },
    ],
  };

 
  useEffect(() => {
    if (query) {
      const results = sampleProducts[query.toLowerCase()] || [];
      setSearchQuery(results); // Update the context search results
    }
  }, [query, setSearchQuery, sampleProducts]); // Add sampleProducts to the dependency array

  // Use search results from context or fallback to default category
  const results =
    searchResults.length > 0
      ? searchResults
      : sampleProducts[query?.toLowerCase()] || sampleProducts["men's wear"];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Results for "{query || "Men's Wear"}"</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {results.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToWishlist={addToWishlist}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;

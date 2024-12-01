import React from "react";
import "./ProductCard.css";

function ProductCard({ product, onAddToWishlist }) {
  const { name, price, image } = product;

  const handleWishlistClick = () => {
    onAddToWishlist(product);
  };

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price}</p>
      <button className="wishlist-button" onClick={handleWishlistClick}>
        Add to Wishlist
      </button>
    </div>
  );
}

export default ProductCard;

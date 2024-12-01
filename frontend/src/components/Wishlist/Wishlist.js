import React, { useContext } from "react";
import { StoreContext } from "../StoreContext/StoreContext";
import { FaTrash, FaShoppingBag, FaMale, FaFemale } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToBag } = useContext(StoreContext);
  const navigate = useNavigate(); // Initialize navigate hook

  // Handle adding product to the bag
  const handleAddToBag = (product) => {
    addToBag(product);
  };

  // Handle removing product from the wishlist
  const handleRemoveFromWishlist = (product) => {
    removeFromWishlist(product);
  };

  // Handle "Try On" functionality
  const handleTryOn = (product) => {
    navigate("/try-on", { state: { product } }); // Navigate to TryOnPage with product data
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="product-card"
              style={{
                width: "220px",
                // height:"400px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                textAlign: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>

              <div
                className="product-actions"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <button
                  onClick={() => handleAddToBag(product)}
                  style={{
                    padding: "10px",
                    backgroundColor: "#007bff",
                    color: "white",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <FaShoppingBag /> Add to Bag
                </button>

                <button
                  onClick={() => handleRemoveFromWishlist(product)}
                  style={{
                    padding: "10px",
                    backgroundColor: "#ff4d4d",
                    color: "white",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <FaTrash /> Remove from Wishlist
                </button>

                <button
                  onClick={() => handleTryOn(product)} // Navigate to TryOnPage
                  style={{
                    padding: "10px",
                    backgroundColor: "#28a745",
                    color: "white",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {product.gender === "male" ? <FaMale /> : <FaFemale />} Try On
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

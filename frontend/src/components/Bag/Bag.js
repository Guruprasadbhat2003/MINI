import React, { useContext } from "react";
import { StoreContext } from "../StoreContext/StoreContext";
import { FaTrash, FaShoppingCart } from "react-icons/fa";

const Bag = () => {
  const { bag, removeFromBag } = useContext(StoreContext);

  const handleRemoveFromBag = (product) => {
    removeFromBag(product);
  };

  const handleBuy = () => {
    alert("Proceeding to checkout!");
    
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Bag</h2>
      {bag.length === 0 ? (
        <p>Your bag is empty.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
          {bag.map((product) => (
            <div
              key={product.id}
              className="product-card"
              style={{ width: "250px" }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                style={{
                  width: "100%",
                  height: "150px",
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
                  onClick={() => handleRemoveFromBag(product)}
                  style={{
                    padding: "10px",
                    backgroundColor: "#ff4d4d",
                    color: "white",
                    borderRadius: "5px",
                    border: "none",
                  }}
                >
                  <FaTrash /> Remove from Bag
                </button>

                <button
                  onClick={handleBuy}
                  style={{
                    padding: "10px",
                    backgroundColor: "#28a745",
                    color: "white",
                    borderRadius: "5px",
                    border: "none",
                  }}
                >
                  <FaShoppingCart /> Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bag;

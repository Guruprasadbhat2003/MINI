import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const WishlistIcon = () => {
  const navigate = useNavigate();

  return (
    <div
      className="navbar-section"
      onClick={() => navigate("/wishlist")} 
      title="View Wishlist"
      style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
    >
      <FaHeart style={{ marginRight: "8px" }} />
      <span>Wishlist</span>
    </div>
  );
};

export default WishlistIcon;

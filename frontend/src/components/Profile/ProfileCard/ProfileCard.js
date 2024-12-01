import React from "react";
import "./ProfileCard.css";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ isVisible }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };
  const handleSavedAddressesClick = () => {
    navigate("/saved-address");
  };
   const handleAboutUsClick = () => {
     navigate("/about");
   };

  return (
    <div className={`profile-card ${isVisible ? "visible" : ""}`}>
      <h3>Welcome</h3>
      <p>To access account and manage orders</p>
      <button className="login-button" onClick={handleLoginClick}>
        LOGIN
      </button>
      <button className="signup-btn" onClick={handleSignupClick}>
        SIGN UP
      </button>
      <hr />
      <ul className="card-links">
        <li>Orders</li>
        <li>Wishlist</li>
        <li>Gift Cards</li>
        <li onClick={handleContactClick} style={{ cursor: "pointer" }}>
          Contact Us
        </li>
        <li>
          Virtual Dressing Room<span className="new-badge">New</span>
        </li>
        <li>Credit</li>
        <li>Coupons</li>
        <li>Saved Cards</li>
        <li onClick={handleAboutUsClick} style={{ cursor: "pointer" }}>
          About Us
        </li>
        <li onClick={handleSavedAddressesClick} style={{ cursor: "pointer" }}>
          Saved Addresses
        </li>
      </ul>
    </div>
  );
};

export default ProfileCard;

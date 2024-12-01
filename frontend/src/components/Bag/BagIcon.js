import React from "react";
import { useNavigate } from "react-router-dom";
import { IoBagHandleSharp } from "react-icons/io5";
import "./Bag.css"; 
const Bag = () => {
  const navigate = useNavigate();

  return (
    <div
      className="navbar-section"
      onClick={() => navigate("/bag")}
      title="View Bag"
    >
      <IoBagHandleSharp />
      <span>Bag</span>
    </div>
  );
};

export default Bag;

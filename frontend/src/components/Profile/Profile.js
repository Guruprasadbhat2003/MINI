import React, { useState } from "react";
import ProfileCard from "./ProfileCard/ProfileCard"; 
import { CgProfile } from "react-icons/cg";
const Profile = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsCardVisible(true);
  };

  const handleMouseLeave = () => {
    setIsCardVisible(false);
  };

  return (
    <div
      className="navbar-section"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative" }}
    >
      <CgProfile />
      <span>Profile</span>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ position: "absolute", top: "50px", right: "0" }}
      >
        <ProfileCard isVisible={isCardVisible} />
      </div>
    </div>
  );
};

export default Profile;

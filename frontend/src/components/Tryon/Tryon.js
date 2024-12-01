import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AvatarCreator } from "@readyplayerme/react-avatar-creator";

const TryOnPage = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Get the product from location state

  const [isAvatarCreatorVisible, setIsAvatarCreatorVisible] = useState(false);

  const config = {
    clearCache: true,
    bodyType: "fullbody",
    quickStart: false,
    language: "en",
  };

  const style = { width: "100%", height: "100vh", border: "none" };

  const handleOnAvatarExported = (event) => {
    console.log(`Avatar URL is: ${event.data.url}`);
  };

  const handleAvatarButtonClick = () => {
    setIsAvatarCreatorVisible(true);
  };

  const handleImageDressingModeClick = () => {
    window.open("http://127.0.0.1:5000", "_blank");
  };

  const handleARTryOn = () => {
    if (!product) {
      alert("No product selected for AR try-on.");
      return;
    }

     const flaskUrl = `http://127.0.0.1:5001`;
    window.open(flaskUrl, "_blank");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "black",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      {isAvatarCreatorVisible ? (
        <AvatarCreator
          subdomain="guruprasad-vishnu-bhat"
          config={config}
          style={style}
          onAvatarExported={handleOnAvatarExported}
        />
      ) : (
        <>
          <h2
            style={{
              fontSize: "36px",
              marginBottom: "10px",
              fontWeight: "bold",
            }}
          >
            Time to Try On!
          </h2>
          {product ? (
            <>
              <h3 style={{ fontSize: "28px", marginBottom: "10px" }}>
                {product.name}
              </h3>
              <p style={{ fontSize: "18px", marginBottom: "30px" }}>
                {product.description}
              </p>
            </>
          ) : (
            <p>No product selected for try-on.</p>
          )}

          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <button
              style={{
                padding: "20px 40px",
                backgroundColor: "#007bff",
                color: "white",
                fontSize: "24px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              onClick={handleAvatarButtonClick}
            >
              🚀avatar cloth-on Mode
            </button>

            <button
              style={{
                padding: "20px 40px",
                backgroundColor: "#28a745",
                color: "white",
                fontSize: "24px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              onClick={handleImageDressingModeClick}
            >
              🧑‍💼Image Dressing Mode
            </button>

            <button
              style={{
                padding: "20px 40px",
                backgroundColor: "#ff4d4d",
                color: "white",
                fontSize: "24px",
                borderRadius: "12px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              onClick={handleARTryOn}
            >
              🎮AR Try-on Mode
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TryOnPage;

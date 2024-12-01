import React, { useState, useEffect } from "react";
import "./SavedAddress.css"; // Import the CSS file for styling

function SavedAddress() {
  // State to handle form data
  const [address, setAddress] = useState({
    name: "",
    location: "",
    district: "",
    state: "",
    postalCode: "",
  });

  // State to handle list of addresses
  const [savedAddresses, setSavedAddresses] = useState([]);

  // Load from localStorage on component mount
  useEffect(() => {
    const storedAddresses = JSON.parse(localStorage.getItem("savedAddresses"));
    if (storedAddresses) {
      setSavedAddresses(storedAddresses);
    }
  }, []);

  // Save to localStorage when addresses change
  useEffect(() => {
    localStorage.setItem("savedAddresses", JSON.stringify(savedAddresses));
  }, [savedAddresses]);

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  // Handler for saving an address
  const handleSaveAddress = () => {
    if (
      address.name &&
      address.location &&
      address.district &&
      address.state &&
      address.postalCode
    ) {
      setSavedAddresses([...savedAddresses, address]);
      setAddress({
        name: "",
        location: "",
        district: "",
        state: "",
        postalCode: "",
      });
    } else {
      alert("Please fill out all fields before saving.");
    }
  };

  return (
    <div className="saved-address-container">
      <h2>Save New Address</h2>
      <form className="address-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={address.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={address.location}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>District:</label>
          <input
            type="text"
            name="district"
            value={address.district}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={address.state}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Postal Code:</label>
          <input
            type="text"
            name="postalCode"
            value={address.postalCode}
            onChange={handleChange}
          />
        </div>
        <button
          type="button"
          onClick={handleSaveAddress}
          className="save-button"
        >
          Save Address
        </button>
      </form>

      <h3>Saved Addresses</h3>
      <ul className="saved-address-list">
        {savedAddresses.map((addr, index) => (
          <li key={index} className="address-item">
            <p>
              <strong>Name:</strong> {addr.name}
            </p>
            <p>
              <strong>Location:</strong> {addr.location}
            </p>
            <p>
              <strong>District:</strong> {addr.district}
            </p>
            <p>
              <strong>State:</strong> {addr.state}
            </p>
            <p>
              <strong>Postal Code:</strong> {addr.postalCode}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SavedAddress;

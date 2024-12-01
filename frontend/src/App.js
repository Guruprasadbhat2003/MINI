import React, { useState } from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import Contact from "./components/contact/contact";
import WishlistIcon from "./components/Wishlist/WishlistIcon"; 
import Bag from "./components/Bag/Bag";
import BagIcon from "./components/Bag/BagIcon";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import CustomerAssistant from "./components/CustomerAssistant/CustomerAssistant";
import { FaAtlassian } from "react-icons/fa";
import { Route, Routes, useNavigate,Link } from "react-router-dom";
import Login from "./components/Profile/Login/Login";
import SignIn from "./components/Profile/Signup/Signup";
import SavedAddress from "./components/SavedAddresses/SavedAddress";
import SearchResults from "./components/search/search";
import About from "./components/about/about";
import Wishlist from "./components/Wishlist/Wishlist"; 
import TryOnPage from "./components/Tryon/Tryon";
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    if (event.key === "Enter" && searchQuery) {
      navigate("/search");
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo-section">
          <FaAtlassian />
          <h1 className="site-name">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Avatar_Closet
            </Link>
          </h1>
        </div>

        <nav className="navbar">
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Search for products, brands, and more"
              className="search-bar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
          <ThemeToggle />
          <Profile />
          <WishlistIcon />
          <BagIcon />
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route
            path="/"
            element={
              <div className="marquee">
                <h2>
                  WELCOME TO AVATAR_CLOSET &nbsp;&nbsp; WELCOME TO AVATAR_CLOSET
                  &nbsp; WELCOME TO AVATAR_CLOSET &nbsp; WELCOME TO
                  AVATAR_CLOSET &nbsp; WELCOME TO AVATAR_CLOSET &nbsp; WELCOME
                  TO AVATAR_CLOSET
                </h2>
              </div>
            }
          />
          <Route
            path="/search"
            element={<SearchResults query={searchQuery} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignIn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/saved-address" element={<SavedAddress />} />
          <Route path="/about" element={<About />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/try-on" element={<TryOnPage />} />
        </Routes>
        <h1>Fashion Meets Agumented Reality</h1>
      </main>

      <CustomerAssistant />
      
    </div>
  );
}

export default App;

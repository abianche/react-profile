import React from "react";
import profileImage from "./images/profile.jpg";
import "./App.css";
import { SocialButtons } from "./components/SocialButtons";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profileImage} className="App-logo" alt="logo" />
        <p className="Profile-title">Alessio Bianchetti</p>
        <p className="Profile-subtitle">Computer Scientist</p>
        <SocialButtons></SocialButtons>
      </header>
    </div>
  );
};

export default App;

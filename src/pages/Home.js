import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="floating-hearts"></div>

      <div className="hero-content">
        <h1 className="flicker-text">Happy National Girlfriend’s Day Suhu ❤️</h1>
        <p className="typing-text">Let me show you something beautiful 💖</p>
        <p className="quote">"You’re the reason my world feels magical."</p>
        <p className="petname">Forever Yours, Your Jayu 💘</p>
        <button onClick={() => window.location.href = '/flowers'}>💌 Open Your Surprise</button>
      </div>
    </div>
  );
};

export default Home;

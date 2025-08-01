import React, { useEffect } from 'react';
import './Gift.css';

const Gift = () => {
  useEffect(() => {
    const container = document.querySelector('.floating-hearts');
    for (let i = 0; i < 25; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDuration = `${2 + Math.random() * 2}s`;
      container.appendChild(heart);
    }
  }, []);

  return (
    <div className="gift-page">
      <div className="floating-hearts"></div>

      <h1 className="gift-title">💝 We Can Use This in November &lt;3</h1>

      <div className="gift-box">
        <p>
          For every craving, comfort bite, or cozy night in &lt;3 Happy Girlfriend’s Day Suhu 💗
        </p>

        <a
          href="https://eGft.in/8lW5VT7f426-EQO"
          target="_blank"
          rel="noopener noreferrer"
          className="gift-button"
        >
          Click Me!
        </a>
      </div>

      <audio autoPlay loop>
        <source src="/romantic-bg.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Gift;

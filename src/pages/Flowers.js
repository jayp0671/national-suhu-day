import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Flowers.css';

const Flowers = () => {
  const navigate = useNavigate();
  const heartsRef = useRef(null);

  useEffect(() => {
    const container = heartsRef.current;
    for (let i = 0; i < 25; i++) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDuration = `${2 + Math.random() * 2}s`;
      container.appendChild(heart);
    }
    setTimeout(() => container.innerHTML = '', 3000); // clear after burst
  }, []);

  return (
    <div className="flowers-page">
      <div className="heart-burst" ref={heartsRef}></div>

      <div className="flower-content">
        <h1>🌷 For You, My Love 🌷</h1>

        <div className="tulip-container">
          {[...Array(6)].map((_, i) => (
            <div className="tulip" key={i}>
              <div className="tulip-petal left"></div>
            <div className="tulip-petal center"></div>
            <div className="tulip-petal right"></div>
            <div className="tulip-stem"></div>
            </div>
          ))}
        </div>

        <p>These tulips bloom just for you, forever.</p>
        <button onClick={() => navigate('/letter')}>💌 Read My Letter</button>
      </div>

      <div className="floating-petals"></div>
    </div>
  );
};

export default Flowers;

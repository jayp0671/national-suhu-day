import React, { useEffect } from 'react';
import './Letter.css';

const Letter = () => {
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
    <div className="letter-page">
      <div className="floating-hearts"></div>

      <h1 className="letter-title">💌 A Letter For Suhu 💌</h1>

      <div className="letter-body">
        <p>Hey Suhu,</p>
        <p>
          I love you so incredibly much my love ❤️ You have made my life so much more magical by being in it.
          Every morning I wake up to your beautiful face on my phone and I swear it's the best thing ever ❤️
        </p>
        <p>
          My love, you mean so much to me, you genuinely have no idea. I am so incredibly lucky that I get to
          spend the rest of my life with the most amazing person I have ever met.
        </p>
        <p>
          Happy National Girlfriend's Day my sweet beautiful love &lt;3 Here's to us, our first National Girlfriend's Day
          as a couple, and to infinitely more coming in the future :)
        </p>
        <p>
          I love you so frickin much my jaanu, my sweetheart, my honey, my shona, my kuchu puchu baby, my whole world ❤️
        </p>
        <p>
          Forever Yours, <br />
          Your Jayu 💘
        </p>
      </div>

      <audio autoPlay loop>
        <source src="/romantic-bg.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Letter;

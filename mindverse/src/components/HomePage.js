import React from "react";
import "../styles/main.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>🧠 MindVerse</h1>
        <p>Your personalized mental gym</p>
        <button className="cta-btn">Get Started</button>
      </section>

      <section className="features">
        <div className="feature">
          <h3>🎮 Brain Games</h3>
          <p>Train memory, speed, and focus.</p>
        </div>
        <div className="feature">
          <h3>🎯 Focus Goals</h3>
          <p>Track your daily concentration sessions.</p>
        </div>
        <div className="feature">
          <h3>📈 Progress Tracker</h3>
          <p>Visualize your mental fitness growth.</p>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <ol>
          <li>Choose a game or goal</li>
          <li>Train and stay consistent</li>
          <li>Track and improve over time</li>
        </ol>
      </section>
    </div>
  );
};

export default HomePage;

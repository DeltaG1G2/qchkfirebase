import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to Our Platform</h1>
        <p>Discover amazing features and services</p>
        <button className="cta-button">Get Started</button>
      </header>

      <section className="features">
        <div className="feature-card">
          <h3>Feature 1</h3>
          <p>Description of feature one</p>
        </div>
        <div className="feature-card">
          <h3>Feature 2</h3>
          <p>Description of feature two</p>
        </div>
        <div className="feature-card">
          <h3>Feature 3</h3>
          <p>Description of feature three</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
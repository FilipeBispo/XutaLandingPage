import React from 'react';
import './App.css';

function App() {
  return (
    <div className="page-container">
      <div className="App">
        <header className="hero">
          <img src="/transparent_xuta_logo.png" alt="Xuta Logo" className="logo" />
          <p className="tagline">Where crypto meets football</p>
          <p className="highlight">Invest in player equity through blockchain technology</p>
        </header>

        <section className="coming-soon">
          <p>Something great is on the way—stay tuned.</p>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <p className="contact-link">
            <img src="/XXutalogo.png" alt="X Logo" className="x-icon" />
            <a href="https://x.com/XutaProject" target="_blank" rel="noopener noreferrer">
              Follow us on X (Twitter)
            </a>
          </p>
          <p className="contact-link">
            <img src="/envelopeIcon.png" alt="Email Icon" className="x-icon" />
            <a href="mailto:xuta.project@gmail.com">xuta.project@gmail.com</a>
          </p>
        </section>
      </div>

      <img src="/IconFootballPlayer.png" alt="Football Player" className="side-player" />
    </div>
  );
}

export default App;

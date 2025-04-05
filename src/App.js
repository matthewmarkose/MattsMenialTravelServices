import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <div className="logo">Matt's Menial Travel Services</div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Your Friendly Travel Buddy</h1>
            <p>Let Matt and his team handle all the nitty-gritty details of your travel plans</p>
            <a href="#contact" className="cta-button">Let's Plan Your Trip</a>
          </div>
        </section>

        <section id="services" className="services">
          <h2>What We Do</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Travel Planning</h3>
              <p>From picking the perfect destination to sorting out the small stuff, we've got you covered.</p>
            </div>
            <div className="service-card">
              <h3>Local Tips</h3>
              <p>Get the inside scoop on the best spots to eat, stay, and explore from someone who's been there.</p>
            </div>
            <div className="service-card">
              <h3>Personal Touch</h3>
              <p>We treat every trip like it's our own - because we know how important your vacation is.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Get in Touch</h2>
          <div className="contact-content">
            <p>Ready to start planning your next adventure? Shoot us an email at:</p>
            <a href="mailto:matt.markose@gmail.com" className="email-link">matt.markose@gmail.com</a>
            <p>Matt or one of his friendly associates will get back to you pronto to help plan your perfect getaway.</p>
          </div>
        </section>

        <section className="tipping">
          <h2>Show Some Love</h2>
          <p>If we helped make your trip awesome, feel free to buy us a coffee!</p>
          <div className="tipping-options">
            <button className="tip-button">$10</button>
            <button className="tip-button">$20</button>
            <button className="tip-button">$50</button>
            <button className="tip-button">Custom</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Matt's Menial Travel Services. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

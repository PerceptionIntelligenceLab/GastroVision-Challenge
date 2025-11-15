import React from 'react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <h1 className="hero-title">
          GastroVision Challenge:<br />International Challenge on Endoscopic Image Classification (2025)
        </h1>
        <p className="hero-subtitle">
          Advancing AI for Gastrointestinal Endoscopy
        </p>
        <p className="hero-description">
          Gastrointestinal (GI) endoscopy plays a critical role in the early detection and management of colorectal, esophageal, and inflammatory diseases. However, accurate interpretation of endoscopic findings remains highly operator-dependent and prone to variability across clinicians, training levels, and healthcare settings. With the rapid advancement of AI-assisted endoscopy, there is a growing need for robust, diverse, and clinically meaningful datasets to benchmark machine learning systems for real-world use.
        </p>
      </div>
    </section>
  )
}

export default Hero


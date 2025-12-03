import React from 'react'

const ChallengeOverview: React.FC = () => {
  return (
    <section id="challenge" className="section challenge-overview">
      <div className="section-container">
        <h2 className="section-title">Challenge Description</h2>
        
        <div className="section-content">
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>GastroVision Challenge: International Challenge on Endoscopic Image Classification (2025)</h3>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1rem' }}>Advancing AI for Gastrointestinal Endoscopy</p>
          <p style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
            Gastrointestinal (GI) endoscopy plays a critical role in the early detection and management of colorectal, esophageal, and inflammatory diseases. However, accurate interpretation of endoscopic findings remains highly operator-dependent and prone to variability across clinicians, training levels, and healthcare settings. With the rapid advancement of AI-assisted endoscopy, there is a growing need for robust, diverse, and clinically meaningful datasets to benchmark machine learning systems for real-world use.
          </p>
          <p style={{ marginBottom: '2rem', lineHeight: '1.8', fontWeight: '500' }}>
            <strong>Objective:</strong> Participants are required to design a classification model that assigns each endoscopic image to one of four clinically relevant categories: Normal mucosa and vascular pattern (Normal mucosa and vascular pattern), Normal esophagus, Colon polyps, and Erythema.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🏥</div>
            <h3 className="feature-title">4-Class Classification</h3>
            <p className="feature-description">Normal mucosa, normal esophagus, colon polyps, and erythema</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3 className="feature-title">Robust Evaluation</h3>
            <p className="feature-description">Accuracy, Macro F1-score, AUROC, and confusion matrix analysis</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3 className="feature-title">Global Impact</h3>
            <p className="feature-description">Improve early detection and assist clinicians in low-resource settings</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChallengeOverview


import React from 'react'

const Tasks: React.FC = () => {
  return (
    <section id="tasks" className="section tasks">
      <div className="section-container">
        <h2 className="section-title">Challenge Task</h2>
        <div className="section-content">
          <p>
            Participants are required to design a classification model that assigns each endoscopic image to one of four clinically relevant categories.
          </p>
        </div>

        <div className="task-content">
          <h3>4-Class Endoscopic Image Classification</h3>
          <p>Design a classification model that assigns each endoscopic image to one of four clinically relevant categories. This is the primary task for the GastroVision Challenge.</p>
          <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Categories:</h4>
          <ul>
            <li><strong>Normal mucosa and vascular pattern (Normal mucosa and vascular pattern):</strong> Represents healthy colonic tissue with typical vascular and mucosal structures. This class is essential for distinguishing normal findings from subtle pathology.</li>
            <li><strong>Normal esophagus:</strong> Shows normal upper GI mucosa and lumen appearance. Differentiating normal esophagus from inflamed or Barrett's mucosa is clinically important for screening and surveillance.</li>
            <li><strong>Colon polyps:</strong> Includes a wide variety of colorectal polyps (hyperplastic, adenomatous, sessile, flat, etc.). Polyp detection and classification are vital for colorectal cancer prevention.</li>
            <li><strong>Erythema:</strong> Represents inflamed mucosa with reddish discoloration. This class adds subtlety and difficulty, testing the model's ability to differentiate early inflammatory changes from normal tissue.</li>
          </ul>
          <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Challenge Objectives:</h4>
          <ul>
            <li>Accurately classify endoscopic images into the 4 categories</li>
            <li>Demonstrate robustness across patient variability, imaging conditions, and anatomical regions</li>
            <li>Handle class imbalance and real-world data noise</li>
            <li>Push the boundaries of AI-assisted video endoscopy</li>
          </ul>
          <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>This challenge encourages innovation in:</h4>
          <ul>
            <li>Convolutional neural networks (CNNs)</li>
            <li>Vision Transformers (ViT)</li>
            <li>Mamba/state-space models</li>
            <li>Self-supervision and semi-supervision</li>
            <li>Domain generalization and data-efficient learning</li>
            <li>Lightweight models for real-time clinical deployment</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Tasks


import React, { useState } from 'react'

const DataSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)

  const dataInfo = [
    {
      title: "Dataset Overview",
      content: (
        <div>
          <p>The GastroVision Challenge uses a large and diverse dataset representing both normal anatomical structures and common pathological findings in GI endoscopy.</p>
          <p style={{ marginTop: '1rem' }}>The dataset includes four clinically relevant categories:</p>
          <ul style={{ marginTop: '1rem', marginLeft: '2rem' }}>
            <li><strong>Normal mucosa and vascular pattern (large bowel):</strong> Represents healthy colonic tissue with typical vascular and mucosal structures. This class is essential for distinguishing normal findings from subtle pathology.</li>
            <li><strong>Normal esophagus:</strong> Shows normal upper GI mucosa and lumen appearance. Differentiating normal esophagus from inflamed or Barrett's mucosa is clinically important for screening and surveillance.</li>
            <li><strong>Colon polyps:</strong> Includes a wide variety of colorectal polyps (hyperplastic, adenomatous, sessile, flat, etc.). Polyp detection and classification are vital for colorectal cancer prevention.</li>
            <li><strong>Erythema:</strong> Represents inflamed mucosa with reddish discoloration. This class adds subtlety and difficulty, testing the model's ability to differentiate early inflammatory changes from normal tissue.</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>The dataset is designed to test model robustness across patient variability, imaging conditions, and anatomical regions, handling class imbalance and real-world data noise.</p>
        </div>
      )
    },
    {
      title: "Download Links",
      content: (
        <div>
          <p><strong>Dataset Release Date:</strong> November 15, 2025</p>
          <p style={{ marginTop: '1rem' }}>The dataset will be made available on the release date. Please check back or contact <a href="mailto:debesh.jha@usd.edu">debesh.jha@usd.edu</a> for access information.</p>
        </div>
      )
    }
  ]

  return (
    <section id="data" className="section data-section">
      <div className="section-container">
        <h2 className="section-title">Dataset Information</h2>
        
        <div className="data-tabs">
          {dataInfo.map((info, index) => (
            <button
              key={index}
              className={`data-tab ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {info.title}
            </button>
          ))}
        </div>

        <div className="task-content">
          <h3>{dataInfo[activeTab].title}</h3>
          {dataInfo[activeTab].content}
        </div>
      </div>
    </section>
  )
}

export default DataSection


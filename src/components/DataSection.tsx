import React, { useState } from 'react'

const DataSection: React.FC = () => {
  const [mainTab, setMainTab] = useState(0) // 0: Dataset Overview, 1: Download Links
  const [categoryTab, setCategoryTab] = useState(0) // For category tabs inside Dataset Overview

  const categories = [
    {
      title: "Large bowel",
      description: "Represents healthy colonic tissue with typical vascular and mucosal structures. This class is essential for distinguishing normal findings from subtle pathology.",
      images: [
        "/asserts/Normal mucosa and vascular pattern/Normal mucosa and vascular pattern1.png",
        "/asserts/Normal mucosa and vascular pattern/Normal mucosa and vascular pattern2.png",
        "/asserts/Normal mucosa and vascular pattern/Normal mucosa and vascular pattern3.png",
        "/asserts/Normal mucosa and vascular pattern/Normal mucosa and vascular pattern4.png"
      ]
    },
    {
      title: "Normal esophagus",
      description: "Shows normal upper GI mucosa and lumen appearance. Differentiating normal esophagus from inflamed or Barrett's mucosa is clinically important for screening and surveillance.",
      images: [
        "/asserts/Normal esophagus/Normal esophagus.png",
        "/asserts/Normal esophagus/Normal esophagus2.png",
        "/asserts/Normal esophagus/Normal esophagus3.png",
        "/asserts/Normal esophagus/Normal esophagus4.png"
      ]
    },
    {
      title: "Colon polyps",
      description: "Includes a wide variety of colorectal polyps (hyperplastic, adenomatous, sessile, flat, etc.). Polyp detection and classification are vital for colorectal cancer prevention.",
      images: [
        "/asserts/colonpolyps/colonpolyps.png",
        "/asserts/colonpolyps/colonpolyps2.png",
        "/asserts/colonpolyps/colonpolyps3.png",
        "/asserts/colonpolyps/colonpolyps4.png"
      ]
    },
    {
      title: "Erythema",
      description: "Represents inflamed mucosa with reddish discoloration. This class adds subtlety and difficulty, testing the model's ability to differentiate early inflammatory changes from normal tissue.",
      images: [
        "/asserts/Erythema/Erythema1.png",
        "/asserts/Erythema/Erythema2.png",
        "/asserts/Erythema/Erythema3.png",
        "/asserts/Erythema/Erythema4.png"
      ]
    }
  ]

  const mainTabs = [
    {
      title: "Dataset Overview",
      content: (
        <div>
          <p>The GastroVision Challenge uses a large and diverse dataset representing both normal anatomical structures and common pathological findings in GI endoscopy.</p>
          <p style={{ marginTop: '1rem' }}>The dataset is available on Kaggle and includes four clinically relevant categories:</p>
          
          <div style={{ marginTop: '2rem' }}>
            <div className="category-tabs">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`category-tab ${categoryTab === index ? 'active' : ''}`}
                  onClick={() => setCategoryTab(index)}
                >
                  {category.title}
                </button>
              ))}
            </div>

            <div className="category-content" style={{ marginTop: '2rem' }}>
              <h4 className="category-title">{categories[categoryTab].title}</h4>
              <p className="category-description">{categories[categoryTab].description}</p>
              <div className="category-images-grid">
                {categories[categoryTab].images.map((img, idx) => {
                  const isLastImage = idx === categories[categoryTab].images.length - 1
                  return (
                    <div 
                      key={idx} 
                      className={`category-image-item ${isLastImage ? 'last-image' : ''}`}
                      onClick={isLastImage ? () => window.open('https://www.kaggle.com/datasets/debeshjha1/gastrovision-4', '_blank') : undefined}
                      style={isLastImage ? { cursor: 'pointer' } : {}}
                    >
                      <img src={img} alt={`${categories[categoryTab].title} ${idx + 1}`} />
                      {isLastImage && (
                        <div className="plus-overlay">
                          <span className="plus-symbol">+</span>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Download Links",
      content: (
        <div>
          <h4 style={{ color: '#0066cc', marginBottom: '1rem' }}>Training Dataset</h4>
          <p style={{ marginBottom: '2rem' }}>
            <a 
              href="https://www.kaggle.com/datasets/debeshjha1/gastrovision-4" 
              target="_blank" 
              rel="noopener noreferrer"
              className="kaggle-link"
              style={{ color: '#000000', textDecoration: 'underline', fontSize: '1.1rem' }}
            >
              GastroVision-4 Dataset on Kaggle
            </a>
          </p>
          
          <h4 style={{ color: '#0066cc', marginBottom: '1rem' }}>Testing Dataset</h4>
          <p style={{ marginBottom: '2rem' }}>Will be announced soon.</p>
          
          <p style={{ marginTop: '2rem' }}><strong>Training Dataset Release Date:</strong> November 15, 2025</p>
          <p style={{ marginTop: '1rem' }}>
            For questions about dataset access, please contact{' '}
            <a href="mailto:debesh.jha@usd.edu" style={{ color: '#000000', textDecoration: 'underline' }}>
              debesh.jha@usd.edu
            </a>
          </p>
        </div>
      )
    }
  ]

  return (
    <section id="data" className="section data-section">
      <div className="section-container">
        <h2 className="section-title">Dataset Information</h2>
        
        <div className="data-tabs">
          {mainTabs.map((tab, index) => (
            <button
              key={index}
              className={`data-tab ${mainTab === index ? 'active' : ''}`}
              onClick={() => setMainTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="data-content">
          <h3>{mainTabs[mainTab].title}</h3>
          {mainTabs[mainTab].content}
        </div>
      </div>
    </section>
  )
}

export default DataSection


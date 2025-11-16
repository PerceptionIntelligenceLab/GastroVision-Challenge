import { useState, useEffect } from 'react'
import Header from './components/Header'
import Statistics from './components/Statistics'
import Tasks from './components/Tasks'
import Evaluation from './components/Evaluation'
import DataSection from './components/DataSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1)
      setCurrentSection(hash || 'home')
    }

    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)

    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const renderContent = () => {
    switch (currentSection) {
      case 'participants':
        return <Statistics />
      case 'dates':
        return <Evaluation />
      case 'submissions':
        return (
          <main className="main-content">
            <h1>Submissions</h1>
            <p style={{ color: '#dc2626', fontWeight: 'bold', fontSize: '1.1rem' }}>Submit to the D2L dropbox under assignments.</p>
            
            <h2 style={{ marginTop: '2rem' }}>Evaluation Metrics</h2>
            <p style={{ marginBottom: '2rem' }}>
              Models will be evaluated on a held-out test set using comprehensive metrics. A public leaderboard will display performance on the validation set. Final rankings will be based on the private test set.
            </p>
            
            <div className="metrics-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
              <div className="metric-card" style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                <h3 className="metric-title" style={{ color: '#0066cc', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Accuracy</h3>
                <p className="metric-description" style={{ color: '#6c757d', fontSize: '0.9rem' }}>Primary evaluation metric - overall classification accuracy</p>
              </div>
              <div className="metric-card" style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                <h3 className="metric-title" style={{ color: '#0066cc', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Macro F1-Score</h3>
                <p className="metric-description" style={{ color: '#6c757d', fontSize: '0.9rem' }}>Harmonic mean of precision and recall averaged across all classes</p>
              </div>
              <div className="metric-card" style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                <h3 className="metric-title" style={{ color: '#0066cc', fontSize: '1.1rem', marginBottom: '0.5rem' }}>AUROC (Per Class)</h3>
                <p className="metric-description" style={{ color: '#6c757d', fontSize: '0.9rem' }}>Area Under the Receiver Operating Characteristic curve for each class</p>
              </div>
              <div className="metric-card" style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                <h3 className="metric-title" style={{ color: '#0066cc', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Confusion Matrix Analysis</h3>
                <p className="metric-description" style={{ color: '#6c757d', fontSize: '0.9rem' }}>Detailed breakdown of classification performance across all 4 classes</p>
              </div>
              <div className="metric-card" style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                <h3 className="metric-title" style={{ color: '#0066cc', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Per-class Precision & Recall</h3>
                <p className="metric-description" style={{ color: '#6c757d', fontSize: '0.9rem' }}>Class-specific performance metrics for detailed analysis</p>
              </div>
            </div>
          </main>
        )
      case 'dataset':
        return <DataSection />
      case 'tasks':
        return <Tasks />
      case 'conduct':
        return (
          <main className="main-content">
            <h1>Code of Conduct</h1>
            <p>All participants of this classroom challenge are expected to:</p>
            <ul>
              <li>Uphold academic integrity - no plagiarism; submit only original work</li>
              <li>Properly follow all data usage guidelines</li>
              <li>Respect confidentiality and avoid sharing or redistributing the dataset</li>
              <li>Use models and results responsibly, strictly for research and non-clinical purposes</li>
            </ul>
            <p><strong>Any violation of this Code of Conduct may result in removal or disqualification from the challenge.</strong></p>
          </main>
        )
      case 'contact':
        return (
          <main className="main-content">
            <h1>Contact</h1>
            <h2>Challenge Organizers</h2>
            <p><strong>Dr. Debesh Jha</strong></p>
            <p>Assistant Professor (Tenure Track)</p>
            <p>University of South Dakota</p>
            <p>Email: <a href="mailto:debesh.jha@usd.edu">debesh.jha@usd.edu</a></p>
            <h2>Questions</h2>
            <p>For any questions about the challenge, please contact <a href="mailto:debesh.jha@usd.edu">debesh.jha@usd.edu</a></p>
          </main>
        )
      default:
        return (
          <main className="main-content">
        <h1 className="challenge-title">GastroVision Challenge (2025-26)</h1>
        <p style={{ fontSize: '1.3rem', fontWeight: '500', color: '#0066cc', marginBottom: '2rem', textAlign: 'center' }}>Endoscopic Image Classification</p>

        <h2>Overview</h2>
        <p>Gastrointestinal (GI) endoscopy plays a critical role in the early detection and management of colorectal, esophageal, and inflammatory diseases. However, accurate interpretation of endoscopic findings remains highly operator-dependent and prone to variability across clinicians, training levels, and healthcare settings. With the rapid advancement of AI-assisted endoscopy, there is a growing need for robust, diverse, and clinically meaningful datasets to benchmark machine learning systems for real-world use.</p>
        
        <p>GastroVision Challenge is an international challenge designed to evaluate and compare state-of-the-art algorithms for 4-class GI endoscopic image classification, using a large and diverse dataset representing both normal anatomical structures and common pathological findings.</p>

        <h2>Challenge Task</h2>
        <p>Participants are required to design a classification model that assigns each endoscopic image to one of four clinically relevant categories:</p>
        <ul>
          <li><strong>Normal mucosa and vascular pattern (large bowel):</strong> Represents healthy colonic tissue with typical vascular and mucosal structures. This class is essential for distinguishing normal findings from subtle pathology.</li>
          <li><strong>Normal esophagus:</strong> Shows normal upper GI mucosa and lumen appearance. Differentiating normal esophagus from inflamed or Barrett's mucosa is clinically important for screening and surveillance.</li>
          <li><strong>Colon polyps:</strong> Includes a wide variety of colorectal polyps (hyperplastic, adenomatous, sessile, flat, etc.). Polyp detection and classification are vital for colorectal cancer prevention.</li>
          <li><strong>Erythema:</strong> Represents inflamed mucosa with reddish discoloration. This class adds subtlety and difficulty, testing the model's ability to differentiate early inflammatory changes from normal tissue.</li>
        </ul>

        <h2>Challenge Objectives</h2>
        <p>Participants must develop models that:</p>
        <ul>
          <li>Accurately classify endoscopic images into the 4 categories</li>
          <li>Demonstrate robustness across patient variability, imaging conditions, and anatomical regions</li>
          <li>Handle class imbalance and real-world data noise</li>
          <li>Push the boundaries of AI-assisted video endoscopy</li>
        </ul>

        <p>This challenge encourages innovation in:</p>
        <ul>
          <li>Convolutional neural networks (CNNs)</li>
          <li>Vision Transformers (ViT)</li>
          <li>Mamba/state-space models</li>
          <li>Self-supervision and semi-supervision</li>
          <li>Domain generalization and data-efficient learning</li>
          <li>Lightweight models for real-time clinical deployment</li>
        </ul>

        <h2>Who Should Participate?</h2>
        <p>This challenge is open to:</p>
        <ul>
          <li>AI/ML researchers</li>
          <li>Biomedical imaging scientists</li>
          <li>Clinical AI groups</li>
          <li>Students and university teams</li>
          <li>Industry R&D laboratories</li>
          <li>Startups working on medical imaging</li>
        </ul>

        <h2>Impact & Relevance</h2>
        <p>Accurate automated classification of endoscopic images can:</p>
        <ul>
          <li>Improve early detection of precancerous lesions</li>
          <li>Reduce operator dependency</li>
          <li>Enhance screening accuracy</li>
          <li>Assist clinicians in low-resource settings</li>
          <li>Enable real-time decision support during colonoscopy and upper GI endoscopy</li>
        </ul>

        <p>The GastroVision-4 Challenge aims to foster collaboration between clinicians and computer scientists while advancing the development of reliable AI for endoscopy. This challenge contributes toward building high-quality, open, and globally useful AI solutions for GI endoscopy.</p>
          </main>
        )
    }
  }

  return (
    <div className="app">
      <Header />
      {renderContent()}
      <Footer />
    </div>
  )
}

export default App


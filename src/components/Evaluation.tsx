import React from 'react'

const Evaluation: React.FC = () => {
  const timeline = [
    {
      date: "November 15, 2025",
      title: "Dataset Release",
      description: "Training dataset made available"
    },
    {
      date: "December 1, 2025",
      title: "Submission Deadline",
      description: "Final submission deadline for challenge entries"
    },
    {
      date: "To be Announced",
      title: "Leaderboard Freeze",
      description: "Public leaderboard will be frozen for final evaluation"
    },
    {
      date: "To be Announced",
      title: "Winners Announced",
      description: "Final results and winners will be announced"
    }
  ]

  return (
    <section id="dates" className="section evaluation">
      <div className="section-container">
        <h2 className="section-title">Important Dates</h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">{item.date}</div>
                <h4 className="timeline-title">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Evaluation


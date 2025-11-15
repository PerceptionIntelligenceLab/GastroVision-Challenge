import React from 'react'
import WorldMap from './WorldMap'

const Statistics: React.FC = () => {
  const participationData = [
    { countryCode: "US", count: 12 },
    { countryCode: "CN", count: 10 },
    { countryCode: "DE", count: 8 },
    { countryCode: "JP", count: 7 },
    { countryCode: "GB", count: 6 },
    { countryCode: "CA", count: 5 },
    { countryCode: "FR", count: 4 },
    { countryCode: "KR", count: 4 },
    { countryCode: "IN", count: 3 },
    { countryCode: "AU", count: 3 },
    { countryCode: "BR", count: 2 },
    { countryCode: "NL", count: 1 }
  ]

  return (
    <div className="statistics-page">
      <WorldMap data={participationData} />
    </div>
  )
}

export default Statistics


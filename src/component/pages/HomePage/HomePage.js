import React from 'react'

import MyCarousel from '../../MyCarousel'
import LocationCard from '../../LocationCard'
import { locations } from '../../../data/locations'
import './style.css'

const HomePage = () => {
  const data = locations.locations;

  const renderLocationCards = () => (
    data.map(loc => <LocationCard key={loc.id} id={loc.id} location={loc.location} />)
  )

  return (
    <div className="HomePage">
      <MyCarousel />
      <h2>Locations</h2>
      { renderLocationCards() }
    </div>
  )
}

export default HomePage;
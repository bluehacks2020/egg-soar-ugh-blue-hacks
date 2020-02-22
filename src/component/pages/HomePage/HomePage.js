import React from 'react'

import MyCarousel from '../../MyCarousel'
import LocationCard from '../../LocationCard'
import { locations } from '../../../data/locations'
import './style.css'

const HomePage = () => {
  const data = locations.locations;
  console.log(data)

  const renderLocationCards = () => (
    data.map(loc => <LocationCard key={loc.id} id={loc.id} location={loc.location} community={loc.community} />)
  )

  const renderArticles = () => (
    <div></div>
  )

  return (
    <div className="HomePage">
      <MyCarousel />
      <h2 className="mt-4">Locations</h2>
      <hr/>
      { renderLocationCards() }
      <h2 className="mt-4">Articles</h2>
      <hr/>
      { renderArticles() }
    </div>
  )
}

export default HomePage;
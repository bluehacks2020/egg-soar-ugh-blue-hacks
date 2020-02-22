import React, { Fragment } from 'react'

import MyCarousel from '../../MyCarousel'
import LocationCard from '../../LocationCard'
import { locations } from '../../../data/locations'

const HomePage = () => {
  const data = locations.locations;

  const renderLocationCards = () => (
    data.map(loc => <LocationCard id={loc.id} location={loc.location} />)
  )

  return (
    <Fragment>
      <MyCarousel />
      <p>Locations</p>
      { renderLocationCards() }
    </Fragment>
  )
}

export default HomePage;
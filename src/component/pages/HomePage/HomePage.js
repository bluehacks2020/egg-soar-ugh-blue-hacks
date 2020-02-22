import React, { Fragment } from 'react'

import MyCarousel from '../../MyCarousel'
import LocationCard from '../../LocationCard'
import { locations } from '../../../data/locations'

const HomePage = props => {
  const data = locations.locations;
  console.log(data);

  const renderLocationCards = () => (
    data.map(loc => <LocationCard key={loc.id} location={loc.location} />)
  )

  return (
    <Fragment>
      <MyCarousel />
      { renderLocationCards() }
    </Fragment>
  )
}

export default HomePage;
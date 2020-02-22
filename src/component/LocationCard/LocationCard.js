import React from 'react'

import aeta from '../../assets/images/aeta.jpg'
import dumagat from '../../assets/images/dumagat.jpg'
import ivatan from '../../assets/images/ivatan.jpg'
import './style.css'

const LocationCard = ({ id, location, community }) => {
    return(
        <div className="LocationCard"
            style={{
                backgroundImage: `url(${id === 1 ? aeta : id === 2 ? ivatan : dumagat})`, 
                backgroundSize: 'cover'
            }}
            location-id={id}>
            <h5>{location}</h5>
            <p>{community}</p>
        </div>
    )
}

export default LocationCard
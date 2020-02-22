import React from 'react';
import MyCarousel from '../../MyCarousel';
import { locations } from '../../../data/locations'

const HomePage = (props) => {
  const data = locations.locations;
  console.log(data);

  // const renderLocationCards = () => {

  //   return (

  //   );
  

  // }

  return (
    <>
    <MyCarousel />
    <div> Location Cards </div>

    <ol>
    {data.map(loc => (
        <li key={loc.id}>{loc.location}</li>
      ))}
    </ol>

  
    </> 

  );
}

export default HomePage;
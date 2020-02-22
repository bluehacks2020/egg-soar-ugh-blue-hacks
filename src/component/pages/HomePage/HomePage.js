import React from 'react'

import MyCarousel from '../../MyCarousel'
import LocationCard from '../../LocationCard'
import ArticleCard from '../../ArticleCard'
import rizal from '../../../assets/images/120px-Ph_seal_rizal.png'
import zambales from '../../../assets/images/120px-Zambales_seal.svg.png'
import batanes from '../../../assets/images/Ph_seal_batanes.png'
import ivol from '../../../assets/images/ivolunteer-logo-240-58.png'
import  { locations }  from '../../../data/locations'
import  { articles }  from '../../../data/articles'
import './style.css'

const HomePage = () => {
  const location = locations.locations
  const article = articles.articles

  const renderLocationCards = () => (
    location.map(loc => <LocationCard key={loc.id} id={loc.id} location={loc.location} community={loc.community} />)
  )

  const renderArticles = () => (
    article.map(art => <ArticleCard key={art.id} id={art.id} title={art.title} date={art.date} preview={art.preview} />)
  )

  const renderLGUs = () => (
    <div className="lgus">
      <div className="row">
        <div className="col-xs-12 col-4">
          <img src={rizal} alt=""/>
        </div>
        <div className="col-xs-12 col-4">
          <img src={zambales} alt=""/>
        </div>
        <div className="col-xs-12 col-4">
          <img src={batanes} alt=""/>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <img src={ivol} alt=""/>
        </div>
      </div>
    </div>
  )

  return (
    <div className="HomePage">
      <MyCarousel />
      <h2 className="mt-4">Immersions</h2>
      <hr/>
      { renderLocationCards() }
      <h2 className="mt-4">Articles</h2>
      <hr/>
      { renderArticles() }
      <h2 className="mt-4">Partners</h2>
      <hr/>
      { renderLGUs() }
    </div>
  )
}

export default HomePage;
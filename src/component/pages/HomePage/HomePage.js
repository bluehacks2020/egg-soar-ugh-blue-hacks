import React from 'react'

import MyCarousel from '../../MyCarousel'
import LocationCard from '../../LocationCard'
import ArticleCard from '../../ArticleCard'
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

  return (
    <div className="HomePage">
      <MyCarousel />
      <h2 className="mt-4">Immersions</h2>
      <hr/>
      { renderLocationCards() }
      <h2 className="mt-4">Articles</h2>
      <hr/>
      { renderArticles() }
    </div>
  )
}

export default HomePage;
import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Card from './component/Card'
import dat from './data'

function App() {
  const cardData = dat.map(function(value){
    return (
      <Card 
        img = {value.coverImg}
        rating = {value.stats.rating}
        reviewCount = {value.stats.reviewCount}
        country = {value.location}
        title = {value.title}
        price = {value.price}
        openSpots = {value.openSpots}
      /> 
    )
  })

  return (
    <div className="App">
        <Navbar />
        <Hero />
        <section className='cards-list'>
          {cardData}
        </section>
    </div>
  )
}

export default App;

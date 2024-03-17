import React from 'react'
import Delivery from './Delivery'
import Hero from './Hero'
import TopPicks from './TopPicks'

const Home = ({handleAdd}) => {
  return (
    <div>
      <Hero/>
      <Delivery/>
      <TopPicks handleAdd={handleAdd}/>
    </div>
  )
}

export default Home

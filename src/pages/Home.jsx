import React from 'react'
import Featured from '../components/Featured'
import TrustedBy from '../components/TrustedBy'
import Slide from '../components/Slide'
import {cards} from '../data'
import CatCard from '../components/CatCard'

const Home = () => {
  return (
    <div>
        <Featured/>
        <TrustedBy/>
        <Slide slidesToShow={5} arrowsScroll={5}>
          {
            cards.map((card) => (
              <CatCard key={card.id} item = {card}/>
            ))
          }
        </Slide>
    </div>
  )
}

export default Home
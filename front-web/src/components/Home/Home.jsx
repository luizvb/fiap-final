import React, { useState } from 'react'
import Dropdown from '../Dropdown/Dropdown'
import Header from '../Header/Header'
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink
} from './HomeElements'
function Home () {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Noivos João e Maria</h1>
            <h5>Sejam bem vindos amigos ❤️❤️</h5>
            <p>
             Vejam e compartilhem as fotos tiradas no nosso casamento
            </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src='https://i.pinimg.com/originals/4e/eb/27/4eeb2775f99fff65bd549e06d2602c0c.png'
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to='gallery'>
          <ScrollLink>
            Deslize para baixo
            <img
              src='https://www.clipartmax.com/png/middle/126-1264173_on-pc-and-this-will-open-the-paint-menu-with-tabs-game.png'
              alt='scroll-down'
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  )
}

export default Home

import React from 'react'
import HeroImg from '../static/images/hero.png'
const Hero = () => {
  return (
    <div className="bg-white max-w-screen flex flex-col justify-center-stretch items-center object-cover ">
      <img className="max-h-screen w-screen" src={HeroImg}></img>
    </div>
  );
}

export default Hero

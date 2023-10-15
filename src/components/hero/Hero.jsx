import React from 'react'
import "./hero.css";
import titleDecoration from "../../assets/Title-decoration.png";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero__container'>
      <div className="hero__content">
        <h2 className="hero__title__prefix">Discover the Magic of Melody at</h2>
        <h1 className="hero__title">
            <img className='hero__title__left__decor' src={titleDecoration} alt="Title Decoration" />
            Sonic Strings
            <img className='hero__title__right__decor' src={titleDecoration} alt="Title Decoration" />
        </h1>
        <h2 className="hero__subtitle">Where Every Strum Resonates with Passion and Precision</h2>
        <div className="hero__text__container">
        <h3 className="hero__text">At Sonic Strings, we delve into the soul of music, crafting a symphony of instruments that resonate with your deepest emotions. Dive into our world where strings come to life, where the subtle vibrations echo stories untold. Weather you're a seasoned musician or a curious beginner, our collection of guitars invites you on a musical journey. Each instrument is a masterpiece, waiting to be embraced by your fingertips, igniting melodies that linger in the heart.</h3>
        <h3 className="hero__text__bottom">Explore the harmonious blend of craftsmanship and creativity at Sonic Strings, where every chord struck is a note of inspiration.</h3>
        <button className="hero__action__btn">
        <Link to="guitars" style={{ textDecoration: 'none', color: 'white' }}>
          Explore Our Store
        </Link>
        </button>
        </div>
      </div>
    </div>
  )
}

export default Hero

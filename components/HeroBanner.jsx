import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'
const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div className='hero-banner-item'>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <p >{heroBanner.midText}</p>
        <p>{heroBanner.largeText1}</p>
        <img 
        src={urlFor(heroBanner.image)} 
        alt="Headpones" 
        className='hero-banner-image'/>

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type='button'>{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>{heroBanner.product}</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
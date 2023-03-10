import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
const FooterBanner = ({ footerBanner: {discount, largeText1, largeText2, desc, saleTime, smallText, midText, product, buttonText, image} }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h4>{largeText1}</h4>
          <h4>{largeText2}</h4>
          <p>{saleTime}</p>


        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button>Buy</button>
          </Link>
        </div>

        <img 
          src={urlFor(image)}
          className='footer-banner-image'
        />
      </div>
    </div>
  );
};

export default FooterBanner;

import React from 'react';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Comfort candle store All Rights Reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiFillYoutube />
      </p>
    </div>
  )
}

export default Footer
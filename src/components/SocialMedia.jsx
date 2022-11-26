import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://t.me/Ost_Andrew" target="_blank" rel="noreferrer">
        <FaTelegramPlane />
      </a>
      <a href="https://api.whatsapp.com/send?phone=79639780205" target="_blank" rel="noreferrer">
        <FaWhatsapp />
      </a>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;

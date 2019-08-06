import React from "react";
import { Link } from 'react-router-dom';
import ic_close from '../../images/ic_close.svg';
import "./menu.css";
const cn = require('classnames');

const Menu = props => {
  const buttonClass = cn('menu-close-button', {
    'button_visible': props.isVisible,
  });
  return (
    <div className="menu-container">
      <div className="menu">
        <Link className="menu-item" to='/aboutus#00' onClick={props.onMenuClose}>About</Link>
        <Link className="menu-item" to='/services#00' onClick={props.onMenuClose}>Services</Link>
        <Link className="menu-item" to='/team' onClick={props.onMenuClose}>Meet the team</Link>
        <Link className="menu-item" to='/careers' onClick={props.onMenuClose}>Careers</Link>
        <Link className="menu-item" to='/privacy-policy' onClick={props.onMenuClose}>Privacy Policy</Link>
        <div className="menu-contact-section">
          <p><a href='tel:16306494473'>+1 (630) 649-4473</a></p>
          <p><a href='mailto:hello@pixoulinc.com'>hello@stratus-digital.com</a></p>
        </div>
        <a className="menu-contact-button" href="#Contact" onClick={props.onMenuClose}>
          <div>Contact Us</div>
        </a>
        <div className="menu-link-section">
          <div>&copy; 2019 Stratus Digital, Inc. All rights reserved.</div>
          <Link className="small-menu-item" to='/privacy-policy'>Privacy Policy</Link> | <Link className="small-menu-item" to='/tos'>Terms of Service</Link>
        </div>
      </div>
      <button className={buttonClass} onClick={props.onMenuClose}>
        <img src={ic_close} alt="ic_close" />
      </button>
    </div>
  );
};

export { Menu };

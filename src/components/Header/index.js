import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./header.css";
const cn = require('classnames');

const Header = props => {
  const link = '#Contact';
  const { whiteMode } = props;
  const headerClass = cn('header', {
    'white-header': whiteMode,
  });
  return (
    <div className={headerClass}>
      <Link className="logo" to='/'>Stratus Digital</Link>
      <a className="pixoul_button contactus-button" href={link}>  
        <span>Contact Us</span>
      </a>
      <button
        className="pixoul_button hamburger-button"
        onClick={props.onMenuClick}
      >
        <div>
          <span id="span-1"></span>
          <span id="span-2"></span>
          <span id="span-3"></span>
        </div>
      </button>
    </div>
  );
};

Header.defaultProps = {
  whiteMode: false,
};

Header.propTypes = {
  whiteMode: PropTypes.bool,
}

export { Header };

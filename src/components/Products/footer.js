import React from "react";
import { Link } from 'react-router-dom';
import "./products.css";
import pixoul_white from '../../images/pixoul-white.svg';

const ProductFooter = (props) => {
    return (
      <div className="product-footer-wrapper">
        <div className="product-footer-background" />
        <div className="product-footer">
          <div className="product-footer-row">
            <div>
              <h1>Got a project for us?</h1>
              <h3>See how we help ambitious brands dominate digital.</h3>
            </div>
            <a className="pixoul_button footer-bar-button" href='/#Contact'>  
              <span>Contact Us</span>
            </a>
          </div>
          <div className="product-footer-row">
            <div className='logo-section'>
              <img src={pixoul_white} alt='white-logo' />
              <p>Using Design Thinking, we help organizations archieve business goals and affect bottom lines.</p>
            </div>
            <div className="footer-bar">
              <div>
                <p>Capabilities</p>
                <Link to='/services-strategy'>Strategy</Link><br/>
                <Link to='/services-design'>Design</Link><br/>
                <Link to='/service-tech'>Technology</Link>
              </div>
              <div>
                <p>Learn More</p>
                <Link to='/aboutus'>About</Link><br/>
                <Link to='/#01'>Work</Link><br/>
                <Link to='/services'>Services</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
  
export default ProductFooter;

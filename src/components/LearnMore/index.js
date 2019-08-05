import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moreImg from "../../images/moreImg.png";
import "./learnmore.css";

export const LearnMore = props => {
  return (
    <Link
      className="learn-more"
      style={props.style}
      to={props.link}
    >
      <img className="more-img" src={moreImg} alt="more" />
      <div>
        <span>Learn More</span>
        <div className="separator" />
      </div>
    </Link>
  );
};

LearnMore.defaultProps = {
  link: 'products',
}

LearnMore.propTypes = {
  link: PropTypes.string,
}

export default LearnMore;

import React from "react";
import './carousel-item.css';

const CarouselItem = (props) => (
  <div className="carousel-wrapper">
    <div className="carousel-item">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <div>
        <span>{`${props.name}, `}</span>
        <span>{props.position}</span>
      </div>
    </div>
  </div>
)

export default CarouselItem;
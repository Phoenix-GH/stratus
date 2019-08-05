import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Parallax } from 'react-scroll-parallax';

import SideBar from './sidebar';
import ProductFooter from './footer';

import "./products.css";
import buttonX from "../../images/buttonX.svg";
import {
  productScreens,
  logos,
  bgImages,
  subtitles,
  descriptions,
} from './data';

const cn = require('classnames');

class ProductsPage extends React.Component {
  static defaultProps = {
    mode: 'ikarūs',
    text: 'Ikarūs is changing what it means to buy, sell, and trade businesses.  Armed with their vision for a easier and more open business marketplace, we transformed how owners interact with each other, investors, and the public.'
  }

  state = {
    page: 0,
    showMenu: false,
    pageLoaded: true,
    progress: 0,
    width: window.innerWidth,
  };
  
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  onLeave = (origin, destination, direction) => {
    this.setState({ page: destination.index, pageLoaded: false });
  };

  onSlideLoad = (section, origin, destination, direction) => {
    this.setState({ pageLoaded: true });
  };

  setProgress = (newProgress) => {
    const { progress } = this.state;
    if(newProgress > progress) {
      this.setState({ progress: newProgress });
    }
  }
  
  render() {
    const { location } = this.props;
    const pageId = location.pathname.split('/')[2];
    const pageIndex = ["00", "01"];
    const { isMenuVisible } = this.props;

    const coverStyle = cn('parallax-cover', {
      'blue-cover' : pageId === '01' || pageId === '03' || pageId === '05',
      'green-cover' : pageId === '02' || pageId === '04' || pageId === '06',
    });

    const settings = {
      className: "slider variable-width",
      dots: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      slidesPerRow: 1,
      centerMode: true,
      variableWidth: true,
      adaptiveHeight: true,
    };
  
    return (
      <div className="products-page">
        <ReactFullpage
          anchors={pageIndex}
          onLeave={this.onLeave}
          afterLoad={this.onSlideLoad}
          scrollingSpeed={500}
          recordHistory={false}
          autoScrolling={isMenuVisible}
          allowScrolling={!isMenuVisible}
          fitToSection={false}
          render={({ state, fullpageApi }) => {
          
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="parallax-wrapper">
                  <Parallax y={[-20, 20]} className="parallax" tagOuter="figure">
                    <img src={bgImages[pageId]} alt={`bg${pageId}`} />
                  </Parallax>
                  <div className={coverStyle} />
                  <div className="parallax-content about-page-button-animation">
                    <Link
                      className="pixoul_button"
                      to={`/#${pageId}`}
                    >
                      <img src={buttonX} alt="buttonX" />
                    </Link>
                    <div className="brand">
                      <img src={logos[pageId]} alt="Logo" />
                    </div>
                  </div>
                </div>
                  
                <div className="product-content">
                  <div className="description">
                    <h2>{descriptions[pageId]}</h2>
                    <h3>{subtitles[pageId]}</h3>
                  </div>
                  <SideBar />
                </div>
              </div>
              <div className="section grey-background">
                <Slider {...settings}>
                  {
                    productScreens[pageId].map((item, index) => (
                      <div key={index}>
                        <div className='product-item'>
                          <div className='shadow' />
                          <img
                            src={item}
                            alt={item}
                          />
                        </div>
                      </div>
                    ))
                  }
                </Slider>
                <ProductFooter />
              </div>
            </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default ProductsPage;

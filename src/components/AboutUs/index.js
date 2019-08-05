import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import PixoulContactForm from "../ContactForm/index";
import downArrow from "../../images/ic_arrow_forward.png";
import { CSSTransition } from "react-transition-group";
import "./about-us.css";

import startup from "../../images/startup.svg";
import worldwide from "../../images/worldwide.svg";
import laptop from "../../images/laptop.svg";
import cloud from "../../images/cloud.svg";
import pencil from "../../images/pencil.svg";
import map from "../../images/map.svg";
import arrow from "../../images/arrow.svg";

const cn = require('classnames');

class AboutUsPage extends React.Component {
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
    const pageIndex = ["00", "01", "02", "03", "Contact"];
    const { page, pageLoaded, width, progress } = this.state;
    const { isMenuVisible } = this.props;
    const titleTimeout = {
      appear: 900,
      enter: 1950,
      exit: 50,
    };

    const textTimeout = {
      appear: 900,
      enter: 2450,
      exit: 50,
    };
    
    const imgTimeout = {
      appear: 900,
      enter: 2450,
      exit: 50,
    };

    const gridClass = cn('about-value-row', {
      'about-text-animation-enter-done': progress >= 7 || width <= 1199,
    });

    const mapClass = cn('about-map-row', {
      'about-image-animation-enter-done': progress >= 9 || width <= 1199,
    });

    const buttonClass = cn('pixoul_button_section', {
      'about-image-animation-enter-done': progress >= 9 || width <= 1199,
    });
    
    return (
      <div className="about-us-page">
        <ReactFullpage
          anchors={pageIndex}
          onLeave={this.onLeave}
          afterLoad={this.onSlideLoad}
          scrollingSpeed={500}
          recordHistory={false}
          autoScrolling={isMenuVisible}
          allowScrolling={!isMenuVisible}
          fitToSection={true}
          render={({ state, fullpageApi }) => {
            // if (fullpageApi) {
            //   fullpageApi.setAllowScrolling(!isMenuVisible);
            //   fullpageApi.setAutoScrolling(isMenuVisible);
            // }
          
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="">
                  <div className="green_heading top_about_us_heading mainTitle-animation-enter">
                    Complex problems deserve elegant solutions.
                  </div>
                  <div className="top_about_us_heading_text mainText-animation-enter">
                    We help brands and organizations succeed in the digital age.
                  </div>
                </div>
                <button
                  onClick={() => fullpageApi.moveSectionDown()}
                  className="page_down_button_centered pixoul_button about-page-button-animation"
                >
                  <img src={downArrow} alt="downArrow" />
                </button>
              </div>
              
              <div className="section grey-background">
                <div className="pixoul_section_heading">
                  <CSSTransition
                    in={page === 1 && pageLoaded && width > 1199 && progress < 1}
                    timeout={titleTimeout}
                    classNames="about-title-animation"
                    onEnter={() => {}}
                    onExited={() => {this.setProgress(1)}}
                  >
                    <h1 className={progress >= 1 || width <= 1199 ? 'about-title-animation-enter-done' : ''}>
                      Who we are
                    </h1>
                  </CSSTransition>
                  <CSSTransition
                    in={page === 1 && pageLoaded && width > 1199 && progress < 2}
                    timeout={titleTimeout}
                    classNames="about-title-animation"
                    onEnter={() => {}}
                    onExited={() => {this.setProgress(2)}}
                  >
                    <h2 className={progress >= 1 || width <= 1199 ? 'about-text-animation-enter-done' : ''}>
                      Pixoul is a human-centered design agency and consultancy that helps businesses find their voice in the digital space. Our partners trust us to provide them with exceptional digital products based on the foundations of Design Thinking to achieve business goals and affect bottom lines.
                    </h2>
                  </CSSTransition>
                </div>
                <div className="pixoul_section_heading">
                  <CSSTransition
                    in={page === 1 && pageLoaded && width > 1199 && progress < 3}
                    timeout={textTimeout}
                    classNames="about-text-animation"
                    onExited={() => {this.setProgress(3)}}
                  >
                    <h2 className={progress >= 1 || width <= 1199 ? 'about-text-animation-enter-done' : ''}>
                      Our partners enjoy:
                    </h2>
                  </CSSTransition>
                  <CSSTransition
                    in={page === 1 && pageLoaded && width > 1199 && progress < 4}
                    timeout={textTimeout}
                    classNames="about-text-animation"
                    onExited={() => {this.setProgress(4)}}
                  >
                    <div className="number-section">
                      <div className="number-item">
                        <div className="number blue_heading">
                          {
                            (progress >= 3 || page >= 1) && <CountUp
                            start={0}
                            end={219}
                            delay={0.5}
                          />
                          }%
                        </div>
                        <p>
                          outperformance vs. design averse companies
                        </p>
                        <Link to="services-strategy">
                          Strategy&nbsp;<span><img src={arrow} alt="Arrow" /></span>
                        </Link>
                      </div>
                      <div className="number-item">
                        <div className="number blue_heading">
                          $
                          {
                            (progress >= 3 || page >= 1) && <CountUp
                              start={0}
                              end={250}
                              delay={1}
                            />
                          }M +
                        </div>
                        <p>
                          in collective designed product value
                        </p>
                        <Link to="services-design">
                          Design&nbsp;<span><img src={arrow} alt="Arrow" /></span>
                        </Link>
                      </div>
                      <div className="number-item">
                        <div className="number blue_heading">
                          {
                            (progress >= 4 || page >= 1) && <CountUp
                              start={0}
                              end={10}
                              delay={1.5}
                            />
                          }
                          x
                        </div>
                        <p>
                          increased product performance
                        </p>
                        <Link to="services-tech">
                          Technology&nbsp;<span><img src={arrow} alt="Arrow" /></span>
                        </Link>
                      </div>
                    </div>
                  </CSSTransition>
                </div>
              </div>

              <div className="section">
                <div className="pixoul_section_heading">
                <CSSTransition
                  in={page === 2 && pageLoaded && width > 1199 && progress < 5}
                  timeout={titleTimeout}
                  classNames="about-title-animation"
                  onEnter={() => {}}
                  onExited={() => {this.setProgress(5)}}
                >
                  <h1 className={progress >= 5 || width <= 1199 ? 'about-title-animation-enter-done' : ''}>
                    What we value.
                  </h1>
                </CSSTransition>
                <CSSTransition
                  in={page === 2 && pageLoaded && width > 1199 && progress < 6}
                  timeout={textTimeout}
                  classNames="about-text-animation"
                  onEnter={() => {}}
                  onExited={() => {this.setProgress(6)}}
                >
                  <h2 className={progress >= 6 || width <= 1199 ? 'about-text-animation-enter-done' : ''}>
                    Our design-centric approach means our products focus on real data and business
                    <br />
                    &nbsp;goals, bringing value and creativity into every solution.
                  </h2>
                  </CSSTransition>
                </div>                  
                <CSSTransition
                  in={page === 2 && pageLoaded && width > 1199 && progress < 7}
                  timeout={textTimeout}
                  classNames="about-text-animation"
                  onEnter={() => {}}
                  onExited={() => {this.setProgress(8)}}
                >
                  <div className={gridClass}>
                    <div className='about-value-item'>
                        <img src={startup} alt="Spaceship" />
                        <h3 className="blue_heading">Innovation</h3>
                    </div>
                
                    <div className='about-value-item'>
                      <img src={worldwide} alt="People" />
                      <h3 className="blue_heading">Collaboration</h3>
                    </div>
                  
                    <div className='about-value-item'>
                      <img src={cloud} alt="Cloud data" />
                      <h3 className="blue_heading">Simple Solutions</h3>
                    </div>

                    <div className='about-value-item'>
                      <img src={laptop} alt="Laptop" />
                      <h3 className="blue_heading">Data & Insights</h3>
                    </div>
                  
                    <div className='about-value-item'>
                      <img src={pencil} alt="Pencil" />
                      <h3 className="blue_heading">Good Design</h3>
                    </div>
                  </div>
                </CSSTransition>
              </div>
              <div className="section grey-background">
                <div className="pixoul_section_heading">
                  <CSSTransition
                      in={page === 3 && pageLoaded && width > 1199 && progress <8}
                      timeout={titleTimeout}
                      classNames="about-title-animation"
                      onEnter={() => {}}
                      onExited={() => {this.setProgress(8)}}
                    >
                    <h1 className={progress >= 7 || width <= 1199 ? 'about-title-animation-enter-done' : ''}>Our partner network.</h1>
                  </CSSTransition>
                  <CSSTransition
                      in={page === 3 && pageLoaded && width > 1199 && progress < 9}
                      timeout={textTimeout}
                      classNames="about-text-animation"
                      onEnter={() => {}}
                      onExited={() => {this.setProgress(9)}}
                  >
                    <h2 className={progress >= 8 || width <= 1199 ? 'about-text-animation-enter-done' : ''}>
                      Headquartered in Dallas, we're a global network with team members across North America, and clients around the world.
                    </h2>
                  </CSSTransition>
                </div>
                <CSSTransition
                    in={page === 3 && pageLoaded && width > 1199 && progress < 10}
                    timeout={imgTimeout}
                    classNames="about-image-animation"
                >
                  <div className={mapClass}>
                    <img src={map} alt="map" />
                  </div>
                </CSSTransition>
                <CSSTransition
                  in={page === 3 && pageLoaded && width > 1199 && progress <10}
                  timeout={imgTimeout}
                  classNames="about-image-animation"
                  onExited={() => this.setProgress(10)}
                >
                  <div className={buttonClass}>
                    <Link className="green_button pixoul_button" to="/#01">Recent Work</Link>
                  </div>
                </CSSTransition>
              </div>
              <div className="section">
                <PixoulContactForm
                  heading="Contact us."
                  isAnimated={width > 1199 && page === 4 && pageLoaded && progress <= 11}
                  onExited={() => this.setProgress(11)}
                />
              </div>

            </ReactFullpage.Wrapper>
            );
          }}
        />
      </div>
    );
  }
}

export default AboutUsPage;

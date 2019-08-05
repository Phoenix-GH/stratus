import React from "react";

import ReactFullpage from "@fullpage/react-fullpage";
import Tilt from "react-tilt";
import { CSSTransition } from "react-transition-group";

import PixoulContactForm from "../ContactForm/index";
import "./home.css";

import LearnMore from "../LearnMore/index";
import { PageIndex } from "../PageIndex";

import bg01 from "../../images/bg01.jpg";
import bg02 from "../../images/bg02.jpg";
import bg03 from "../../images/bg03.jpg";
import bg04 from "../../images/bg04.jpg";

import downArrow from "../../images/ic_arrow_forward.png";
import bgImage from "../../images/bg.jpg";

class Home extends React.Component {
  state = {
    page: 0,
    pageLoaded: false,
    autoScrolling: true,
    readyToMove: true,
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
    this.setState({ page: destination.index, pageLoaded: false, readyToMove: false });
  };

  onSlideLoad = (section, origin, origindestination, direction) => {
    
    this.setState({ pageLoaded: true  });
    if(origin.index === 7 || origin.index === 0) {
      this.setState({ readyToMove: true });
    }
  };

  render() {
    const { page, pageLoaded, autoScrolling, width } = this.state;
    const { isMenuVisible } = this.props;
    const pageIndex = ["00", "01", "02", "03", "04", "Contact"];
    const labelTimeout = {
      appear: 0,
      enter: 100,
      exit: 350
    };

    const titleTimeout = {
      appear: 0,
      enter: 350,
      exit: 300
    };

    const subtitleTimeout = {
      appear: 0,
      enter: 950,
      exit: 900
    };

    const tiltOption = {
      max: 9,
      scale: 1,
      reverse: true
    };

    return (
      <div className="home-page">
        {
          page < 5 && page > 0 && 
            <span className="watermark">
              <span className="num">{pageIndex[page]}</span>
            </span>
        }
        <div className="section">
          <ReactFullpage
            anchors={pageIndex}
            onLeave={this.onLeave}
            afterLoad={this.onSlideLoad}
            scrollingSpeed={500}
            allowScrolling={!isMenuVisible}
            recordHistory={false}
            autoScrolling={autoScrolling}
            fitToSection={false}
            render={({ state, fullpageApi }) => {
              if (fullpageApi) {
                //fullpageApi.setAllowScrolling((readyToMove || width <= 1199) && !isMenuVisible);
                if (width > 1199 && !autoScrolling) {
                  this.setState({ autoScrolling: true }, () => {
                    fullpageApi.setAutoScrolling(true);
                  });
                } else if (width <= 1199 && autoScrolling) {
                  this.setState({ autoScrolling: false }, () => {
                    fullpageApi.setAutoScrolling(false);
                  });
                }
              }

              return (
                <ReactFullpage.Wrapper>
                  <div className="section" id="first">
                    <div className="content-wrapper">
                    <img data-src={bgImage} alt="bgImage" className="bg-image" />
                    <div className="first-content">
                      <div className="first-content__wrapper">
                        <div className="first-title">
                          Creating good marketing strategies for even better businesses.
                          <div className="blue_line_under_title landing-page-blue-line-animation" />
                        </div>
                      </div>

                      <button
                        className="pixoul_button landing-page-button landing-page-button-animation"
                        onClick={() => fullpageApi.moveSectionDown()}
                      >
                        <img src={downArrow} alt="downArrow" />
                      </button>
                    </div>
                    </div>
                  </div>
                  <div className="section">
                    <div className="content-wrapper">
                      <div className="content" id="content-01">
                        <CSSTransition
                          in={page === 1 && pageLoaded && width > 1199}
                          timeout={labelTimeout}
                          classNames="label-animation"
                          onEnter={() => {}}
                        >
                          <div className="label">Who We Are</div>
                        </CSSTransition>
                        <CSSTransition
                          in={page === 1 && pageLoaded && width > 1199}
                          timeout={subtitleTimeout}
                          classNames="subtitle-animation"
                          onEntered={() => this.setState({ readyToMove: true })}
                        >
                          <div className="subtitle">
                            Digital Marketing Agencies are a must<br/>
                            for you small business. We can help<br/>
                            pave the path for you business in the<br/>
                            digital advertising space.
                          </div>
                        </CSSTransition>
                      </div>
                      <Tilt className="Tilt" options={tiltOption}>
                        <img src={bg01} alt="bg01" id="bg01" className="bg-img" />
                        <div className="Tilt-inner">
                          <LearnMore link='products/01' />
                        </div>
                      </Tilt>
                    </div>
                  </div>
                  <div className="section">
                    <div className="content-wrapper">
                      <div className="content" id="content-02">
                        <CSSTransition
                          in={page === 2 && pageLoaded && width > 1199}
                          timeout={labelTimeout}
                          classNames="label-animation"
                          onEnter={() => {}}
                        >
                          <div className="label"></div>
                        </CSSTransition>
                        <CSSTransition
                          in={page === 2 && pageLoaded && width > 1199}
                          timeout={subtitleTimeout}
                          classNames="subtitle-animation"
                          onEntered={() => this.setState({ readyToMove: true })}
                        >
                          <div className="subtitle">
                            Our job starts with you: generating<br/>
                            organic Facebook followers is more<br/>
                            important than boosting that digital<br/>
                            number. We help your page’s viewers<br/>
                            find the deals they want to see.
                          </div>
                        </CSSTransition>
                      </div>
                      <Tilt className="Tilt" options={tiltOption}>
                        <img src={bg02} alt="bg08" id="bg02" className="bg-img" />
                        <div className="Tilt-inner">
                          <LearnMore link='products/02' />
                        </div>
                      </Tilt>
                      </div>
                  </div>
                  
                  <div className="section">
                    <div className="content-wrapper">
                      <div className="content" id="content-03">
                        <CSSTransition
                          in={page === 3 && pageLoaded && width > 1199}
                          timeout={labelTimeout}
                          classNames="label-animation"
                        >
                          <div className="label">Working with Digital Advertising</div>
                        </CSSTransition>
                        <CSSTransition
                          in={page === 3 && pageLoaded && width > 1199}
                          timeout={subtitleTimeout}
                          classNames="subtitle-animation"
                          onEntered={() => this.setState({ readyToMove: true })}
                        >
                          <div className="subtitle">
                            <p>
                              Not sure what you need, or what it<br/>
                              costs? We’re always happy to talk <br/>about how we can can work together.
                            </p>
                            <p>
                              15 minutes of your day can <br/>change the way your business <br/>moves forward
                            </p>
                          </div>
                        </CSSTransition>
                      </div>
                      <Tilt className="Tilt" options={tiltOption}>
                        <img src={bg03} alt="bg03" id="bg03" className="bg-img" />
                        <div className="Tilt-inner">
                          <LearnMore link='products/03' />
                        </div>
                      </Tilt>
                    </div>
                  </div>
                  <div className="section">
                    <div className="content-wrapper">
                      <div className="content" id="content-04">
                        <CSSTransition
                          in={page === 4 && pageLoaded && width > 1199}
                          timeout={labelTimeout}
                          classNames="label-animation"
                        >
                          <div className="label"></div>
                        </CSSTransition>
                        <CSSTransition
                          in={page === 4 && pageLoaded && width > 1199}
                          timeout={subtitleTimeout}
                          classNames="subtitle-animation"
                          onEntered={() => this.setState({ readyToMove: true })}
                        >
                          <div className="subtitle">
                            Give us a call or reach out using the <br/>contact form below — let’s start <br/>the conversation.
                          </div>
                        </CSSTransition>
                      </div>
                      <Tilt className="Tilt" options={tiltOption}>
                        <img src={bg04} alt="bg04" id="bg04" className="bg-img" />
                        <div className="Tilt-inner">
                          <LearnMore link='products/04' />
                        </div>
                      </Tilt>
                    </div>
                  </div>
                 
                  <div className="section">
                    <div className="content-wrapper">
                      <PixoulContactForm
                        heading="Get in Touch"
                        isAnimated={page === 5 && width > 1199 && pageLoaded}
                      />
                    </div>
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
        </div>
        <PageIndex
          pageIndex={pageIndex.slice(0, -1)}
          style={{ right: 44 }}
          selected={pageIndex[this.state.page]}
        />
      </div>
    );
  }
}

export default Home;

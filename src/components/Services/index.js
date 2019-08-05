import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { Link } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import Slider from "react-slick";

import CarouselItem from '../CarouselItem/index';
import PixoulContactForm from "../ContactForm/index";
import "./services.css";

import downArrow from "../../images/ic_arrow_forward.png";
import computer from "../../images/computer.png";
import web_programming from "../../images/web-programming.png";
import lightbulb from "../../images/lightbulb.png";
import oval_shadow from "../../images/oval_shadow.svg";

import example1 from "../../images/examples/Example1.svg";
import example2 from "../../images/examples/Example2.svg";
import example3_1 from "../../images/examples/Example3-1.svg";
import example3_2 from "../../images/examples/Example3-2.svg";
import example4 from "../../images/examples/Example4.svg";
import example5 from "../../images/examples/Example5.svg";
import example6 from "../../images/examples/Example6.svg";

const cn = require('classnames');

const workDescriptions = [
  "From internal tools, to consumer facing products and B2B sales-we've got you covered.",
  "We're at the fore-front of finance tech, pioneering a new path forward.  Let's talk about our recent work in cryptocurrency and governance platforms.",
  'We work with local municipalities to redefine their brand, image, and ways of interacting with their community.',
  'We work on the front lines, helping to standardize medicine—from employee training platforms, to advances in carrier messaging platforms.'
];
class ServicesPage extends React.Component {
  state = {
    page: 0,
    showMenu: false,
    pageLoaded: true,
    progress: 0,
    width: window.innerWidth,
    animateExcellence: false,
    selectedWork: 0,
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
  
  selectWork = (selectedWork) => {
    this.setState({ selectedWork,  animateExcellence: true });
  }

  render() {
    const pageIndex = ["00", "01", "02", "03", "Contact"];
    const { isMenuVisible } = this.props;
    const {
      page,
      pageLoaded,
      width,
      progress,
      animateExcellence,
      selectedWork,
    } = this.state;

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

    const actionTimeout = {
      appear: 0,
      enter: 1000,
      exit: 600,
    }

    const gridClass = cn('pixoul_grid_column_item', {
      'services-text-animation-enter-done': progress >= 1 || width <= 1199,
    });

    const mapClass = cn('services-map-row', {
      'services-image-animation-enter-done': progress >= 5 || width <= 1199,
    });

    const carouselClass = cn('carousel-list-row', {
      'services-image-animation-enter-done': progress >= 8 || width <= 1199,
    });

    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: width > 767 ? 2 : 1,
      slidesToScroll: 1,
      arrows: true,
      variableWidth: width < 767,
      adaptiveHeight: true,
    };

    const carouselItems = [
      {
        key: 1,
        title: 'We love Pixoul!',
        text: "The team at Pixoul is incredible. We came to them with a huge list of requests and they created a beautiful, functional enterprise system for us. It was a big undertaking and their whole team pulled it off.",
        name: 'Danni Parsons',
        position: 'CMO',
      },
      {
        key: 2,
        title: 'Thank you!',
        text: "Thank you to the entire Pixoul team for your all-hands-on-deck mentality. Our customers are over the moon about our new site and we're reaping the rewards..",
        name: 'Derrick Bradley',
        position: 'VP of Operations',
      },
      {
        key: 3,
        title: 'Our ROI keeps rising!',
        text: "Pixoul spent a day at our offices explaining the fundamentals of Design Thinking and we constantly refer back to their session with us. It informs every decision our team makes when we want to improve our products.",
        name: 'Quincy Roberts',
        position: 'CTO',
      },
      {
        key: 4,
        title: 'Effective planning',
        text: "Pixoul is more than great design.  Their team helped us pull together a digital roadmap, determine priorities, and organize our efforts from start to finish.",
        name: 'Josh Porrough',
        position: 'Digital Director',
      },
      {
        key: 5,
        title: 'What more could we ask for?',
        text: "Pixoul is absolutely amazing!  From start to finish, they guided us through our website redesign and held our hand every step of the way.  I couldn't have asked for a better team.",
        name: 'Kendall Sampson',
        position: 'Product Manager',
      },
      {
        key: 6,
        title: 'The smarter first move.',
        text: "We started working with Pixoul after two failed attempts at other dev agencies.  Since then, we've seen engagement go through the roof and customers are loving our new platform.",
        name: 'Jake Richards',
        position: 'CTO',
      }
    ];

    const exampleClass = cn('example-img', {
      'services-image-animation-enter-done': progress >= 5
    });

    const businessLineClass = cn('blue_line_under_label', {
      'selected-label': selectedWork === 0
    });

    const fintechLineClass = cn('blue_line_under_label', {
      'selected-label': selectedWork === 1
    });

    const govenmentLineClass = cn('blue_line_under_label', {
      'selected-label': selectedWork === 2
    });

    const healthcareLineClass = cn('blue_line_under_label', {
      'selected-label': selectedWork === 3
    });

    return (
      <div className="services-us-page">
        <ReactFullpage
          anchors={pageIndex}
          onLeave={this.onLeave}
          afterLoad={this.onSlideLoad}
          scrollingSpeed={500}
          autoScrolling={isMenuVisible}
          allowScrolling={!isMenuVisible}
          fitToSection={false}
          render={({ state, fullpageApi }) => {
            if (fullpageApi) {
              fullpageApi.setAllowScrolling(!isMenuVisible);
            }
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="">
                  <div className="service-title-background">
                    <div className="blue_heading top_about_us_heading mainTitle-animation-enter">
                      How can we help?
                    </div>
                    <div className="top_about_us_heading_text mainText-animation-enter">
                      We're here to bring life to your digital vision. Got a project in mind?&nbsp;<br/>Let's talk.
                    </div>
                  </div>

                  <button
                    onClick={() => fullpageApi.moveSectionDown()}
                    className="page_down_button_centered pixoul_button services-page-button-animation"
                  >
                    <img src={downArrow} alt="downArrow" />
                  </button>
                </div>
              </div>
              <div className="section">
                <div className="pixoul_section_heading">
                <CSSTransition
                  in={page === 1 && pageLoaded && width > 1199 && progress < 1}
                  timeout={titleTimeout}
                  classNames="services-title-animation"
                  onEnter={() => {}}
                  onExited={() => {this.setProgress(1)}}
                >
                  <h1 className={progress >= 1 ? 'services-title-animation-enter-done' : ''}>
                    What we do.
                  </h1>
                </CSSTransition>
                <CSSTransition
                  in={page === 1 && pageLoaded && width > 1199 && progress < 2}
                  timeout={textTimeout}
                  classNames="services-text-animation"
                  onEnter={() => {}}
                  onExited={() => {}}
                >
                  <h2 className={progress >= 1 ? 'services-text-animation-enter-done' : ''}>
                    We'll work with you to find solutions to your most complex challenges.
                  </h2>
                  </CSSTransition>
                </div>
                <div className="pixoul_grid_column">
                <Link to="/services-strategy">
                  <CSSTransition
                    in={page === 1 && pageLoaded && width > 1199 && progress < 2}
                    timeout={textTimeout}
                    classNames="services-text-animation"
                    onEnter={() => {}}
                    onExited={() => {}}
                  >
                    <div className={gridClass}>
                      <div className="pixoul_four_grid_item_img_container">
                        <img src={lightbulb} alt="lightbulb" />
                        <img src={oval_shadow} alt="Oval Shadow" />
                      </div>
                      <div className="pixoul_grid_column_item-content">
                        <h2>Strategy</h2>
                        <h3>
                          Reimagine and redefine your organizational approach by developing new ways of approaching your mission-critical KPIs.
                        </h3>
                      </div>
                      <img src={downArrow} alt='Downarrow' className='arrow' />
                    </div>
                  </CSSTransition>
                  </Link>
                  <Link to="/services-design">
                    <CSSTransition
                      in={page === 1 && pageLoaded && width > 1199 && progress < 2}
                      timeout={titleTimeout}
                      classNames="services-text-animation"
                      onEnter={() => {}}
                      onExited={() => {}}
                    >
                      <div className={gridClass}>
                        <div className="pixoul_four_grid_item_img_container">
                          <img src={computer} alt="computer" />
                          <img src={oval_shadow} alt="Oval Shadow" />
                        </div>
                        <div className="pixoul_grid_column_item-content">
                          <h2>Human-Centered Design</h2>
                          <h3>
                            Use Design Thinking to create products, services, systems, and experiences that address the core needs of your target audience.
                          </h3>
                        </div>
                        <img src={downArrow} alt='Downarrow' className='arrow' />
                      </div>
                    </CSSTransition>
                  </Link>
                  <Link to="/services-tech">
                    <CSSTransition
                      in={page === 1 && pageLoaded && width > 1199 && progress < 2}
                      timeout={textTimeout}
                      classNames="services-text-animation"
                      onEnter={() => {}}
                      onExited={() => {}}
                    >
                      <div className={gridClass}>
                        <div className="pixoul_four_grid_item_img_container">
                          <img src={web_programming} alt="Web programming" />
                          <img src={oval_shadow} alt="Oval Shadow" />
                        </div>
                        <div className="pixoul_grid_column_item-content">
                          <h2>Technology</h2>
                          <h3>
                            Bring your digital solution to life for your customers, and scale it across devices and platforms.
                          </h3>
                        </div>
                        <img src={downArrow} alt='Downarrow' className='arrow' />
                      </div>
                    </CSSTransition>
                  </Link>
                </div>
              </div>
              <div className="section grey-background">
                <div className="pixoul_section_heading">
                  <CSSTransition
                    in={page === 2 && pageLoaded && width > 1199 && progress <3}
                    timeout={titleTimeout}
                    classNames="services-title-animation"
                    onEnter={() => {}}
                    onExited={() => {this.setProgress(3)}}
                  >
                    <h1 className={progress >= 3 ? 'services-title-animation-enter-done' : ''}>Where we work.</h1>
                  </CSSTransition>
                  <CSSTransition
                    in={page === 2 && pageLoaded && width > 1199 && progress < 4}
                    timeout={textTimeout}
                    classNames="services-text-animation"
                    onEnter={() => {}}
                    onExited={() => {this.setProgress(4)}}
                  >
                    <h2 className={progress >= 4 ? 'services-text-animation-enter-done' : ''}>
                      From venture-backed startups to Fortune 500 corporations, we build solutions for our partners across a variety of industries. Here's just a few.
                    </h2>
                  </CSSTransition>
                </div>
                <div className="services-row">
                  <CSSTransition
                    in={page === 2 && pageLoaded && width > 1199 && progress < 5 }
                    timeout={imgTimeout}
                    classNames="services-image-animation"
                    onExited={() => this.setProgress(5)}
                  >
                    <div>
                      <h1>Excellence in action</h1> 
                      <CSSTransition
                        in={animateExcellence}
                        timeout={actionTimeout}
                        classNames="subtitle-animation"
                        onEntered={() => this.setState({ animateExcellence: true })}
                      >
                        <h2 className="subtitle-animation-enter-done">{workDescriptions[selectedWork]}</h2>
                      </CSSTransition>

                      <div className="services-link-row">
                        <div className='label-link'>
                          <Link to="#" onClick={() => this.selectWork(0)}>Business</Link>
                          <div className={businessLineClass} />
                        </div>
                        <div className='label-link'>
                          <Link to="#" onClick={() => this.selectWork(1)}>FinTech</Link>
                          <div className={fintechLineClass} />
                        </div>
                        <div className='label-link'>
                          <Link to="#" onClick={() => this.selectWork(2)}>Government</Link>
                          <div className={govenmentLineClass} />
                        </div>
                        <div className='label-link'>
                          <Link to="#" onClick={() => this.selectWork(3)}>Healthcare</Link>
                          <div className={healthcareLineClass} />
                        </div>
                      </div>
                      <div className='service-button-section'>
                        <Link className="green_button pixoul_button" to='/#01'>
                          Recent Work
                        </Link>
                      </div>
                    </div>
                  </CSSTransition>
                  
                  <div className={mapClass}>
                    <div>
                      <CSSTransition
                        in={page === 2 && pageLoaded && width > 1199 && progress < 5}
                        timeout={imgTimeout}
                        classNames="services-image-animation"
                      >
                        <img src={example1} className={exampleClass} id="example-1" alt="example 1" />
                      </CSSTransition>
                      <CSSTransition
                        in={page === 2 && pageLoaded && width > 1199 && progress < 5}
                        timeout={imgTimeout}
                        classNames="services-image-animation"
                      >
                        <img src={example2} className={exampleClass} id="example-2" alt="example 2" />
                      </CSSTransition>
                      <div>
                        <CSSTransition
                          in={page === 2 && pageLoaded && width > 1199 && progress < 5}
                          timeout={imgTimeout}
                          classNames="services-image-animation"
                        >
                          <img src={example3_1} className={exampleClass} id="example-3-1" alt="example 3" />
                        </CSSTransition>
                        <CSSTransition
                          in={page === 2 && pageLoaded && width > 1199 && progress < 5}
                          timeout={imgTimeout}
                          classNames="services-image-animation"
                        >
                          <img src={example3_2} className={exampleClass} id="example-3-2" alt="example 3" />
                        </CSSTransition>
                      </div>
                    </div>
                    <div>
                      <CSSTransition
                        in={page === 2 && pageLoaded && width > 1199 && progress < 5}
                        timeout={imgTimeout}
                        classNames="services-image-animation"
                      >
                        <img src={example4} className={exampleClass} id="example-4" alt="example 4" />
                      </CSSTransition>
                      <CSSTransition
                        in={page === 2 && pageLoaded && width > 1199 && progress < 5}
                        timeout={imgTimeout}
                        classNames="services-image-animation"
                      >
                        <img src={example5} className={exampleClass} id="example-5" alt="example 5" />
                      </CSSTransition>
                      <CSSTransition
                        in={page === 2 && pageLoaded && width > 1199 && progress < 5}
                        timeout={imgTimeout}
                        classNames="services-image-animation"
                        onExited={() => {this.setProgress(5)}}
                      >
                        <img src={example6} className={exampleClass} id="example-6" alt="example 6" />
                      </CSSTransition>
                    </div>
                  </div>

                </div>
              </div>
              
              <div className="section">
                <div className="pixoul_section_heading">
                  <CSSTransition
                    in={page === 3 && pageLoaded && width > 1199 && progress < 6}
                    timeout={titleTimeout}
                    classNames="services-title-animation"
                    onEnter={() => {}}
                    onExited={() => {this.setProgress(6)}}
                  >
                    <h1 className={progress >= 6 ? 'services-title-animation-enter-done' : ''}>What everyone is saying.</h1>
                  </CSSTransition>
                  <CSSTransition
                      in={page === 3 && pageLoaded && width > 1199 && progress < 7}
                      timeout={textTimeout}
                      classNames="services-text-animation"
                      onEnter={() => {}}
                      onExited={() => {this.setProgress(7)}}
                  >
                    <h2 className={progress >= 7 ? 'services-text-animation-enter-done' : ''}>
                      Don't just take our word for it.
                    </h2>
                  </CSSTransition>
                </div>
                <div className="carousel-row">
                  <CSSTransition
                    in={page === 3 && pageLoaded && width > 1199 && progress < 8}
                    timeout={imgTimeout}
                    classNames="services-image-animation"
                    onExited={() => this.setProgress(8)}
                  >
                    <a className="blue_button pixoul_button" href='services#Contact'>
                      Let's Work Together
                    </a> 
                  </CSSTransition>
                  <CSSTransition
                    in={page === 3 && pageLoaded && width > 1199 && progress < 8}
                    timeout={imgTimeout}
                    classNames="services-image-animation"
                  >
                    <div className={carouselClass}>
                      <Slider {...settings}>
                        {
                          carouselItems.map(item => (
                            <CarouselItem
                              key={item.key}
                              title={item.title}
                              text={item.text}
                              name={item.name}
                              position={item.position}
                            />
                          ))
                        }
                      </Slider>
                    </div>
                  </CSSTransition>
                </div>
              </div>

              <div className="section">
                <PixoulContactForm
                  heading="Contact us."
                  isAnimated={width > 1199 && page === 4 && pageLoaded && progress <= 9}
                  onExited={() => this.setProgress(9)}
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

export default ServicesPage;

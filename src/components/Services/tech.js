import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import PixoulContactForm from "../ContactForm/index";
import { CSSTransition } from "react-transition-group";
import "./services.css";

import downArrow from "../../images/ic_arrow_forward.png";
// import checkmark from "../../images/checkmark-circle.svg";

import adobe from "../../images/technologies/adobe.svg";
import android from "../../images/technologies/android.svg";
import angular from "../../images/technologies/angular.svg";
import apple from "../../images/technologies/apple.svg";
import atom from "../../images/technologies/atom.svg";
import magento from "../../images/technologies/magento.svg";
import shopify from "../../images/technologies/shopify.svg";
import vue from "../../images/technologies/vue.svg";

class ServicesTechSubPage extends React.Component {
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
    const pageIndex = ["00", "01", "02", "Contact"];
    const { isMenuVisible } = this.props;
    const { page, pageLoaded, width, progress } = this.state;
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
                  <div className="">
                      <div className="blue_heading top_about_us_heading mainTitle-animation-enter">
                        Advanced technological support.
                      </div>
                      <div className="top_about_us_heading_text mainText-animation-enter">
                        We deliver solutions on time and on budget through agile development.
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
                <div className="pixoul_list_with_checkboxes_container">
                    <div className="pixoul_list_with_checkboxes_row">
                        <div className="pixoul_list_with_checkboxes_row_left_side">
                            <h2>01. Web & Front End Applications</h2>
                            <p>We use responsive design to build website and front end web applications.  With powerful digital tools, we’re always leveraging the most updated and secure frameworks to ensure seamless integration into your existing architecture.</p>
                        </div>
                        <div className="pixoul_list_with_checkboxes_row_right_side">
                            {/* <img src={checkmark} alt="checkmark" /> */}
                        </div>
                    </div>
                    <div className="pixoul_list_with_checkboxes_row">
                        <div className="pixoul_list_with_checkboxes_row_left_side">
                            <h2>02. Mobile Applications</h2>
                            <p>Beyond responsive web and application development, our human-centered design processes help us to build and support iOS and Android applications—including integration with smart phones, wearables, and Internet of Things devices.</p>
                        </div>
                        <div className="pixoul_list_with_checkboxes_row_right_side">
                            {/* <img src={checkmark} alt="checkmark" /> */}
                        </div>
                    </div>
                    <div className="pixoul_list_with_checkboxes_row">
                        <div className="pixoul_list_with_checkboxes_row_left_side">
                            <h2>03. Ecommerce</h2>
                            <p>Working alongside Google’s ecommerce standards, we implement solutions from a range of secure providers, integrating payment solutions and affording great design across landing pages, menu and navigation, search, category and product pages, conversion funnels, and optimized forms.</p>
                        </div>
                        <div className="pixoul_list_with_checkboxes_row_right_side">
                            {/* <img src={checkmark} alt="checkmark" /> */}
                        </div>
                    </div>
                    <div className="pixoul_list_with_checkboxes_row">
                        <div className="pixoul_list_with_checkboxes_row_left_side">
                            <h2>04. API, CMS & Cloud Integration</h2>
                            <p>Our custom builds allow for seamless API integration, cloud opportunities, and assimilation with robust and secure content management systems, like Wordpress, Drupal, and Joomla.</p>
                        </div>
                        <div className="pixoul_list_with_checkboxes_row_right_side">
                            {/* <img src={checkmark} alt="checkmark" /> */}
                        </div>
                    </div>
                </div>
              </div>              
              <div className="section">
                <div className="pixoul_section_heading">
                    <CSSTransition
                        in={page === 2 && pageLoaded && width > 1199 && progress < 6}
                        timeout={titleTimeout}
                        classNames="services-title-animation"
                        onEnter={() => {}}
                        onExited={() => {this.setProgress(6)}}
                        >
                        <h1 className={progress >= 6 ? 'services-title-animation-enter-done' : ''}>Technologies we leverage.</h1>
                    </CSSTransition>
                    <CSSTransition
                        in={page === 2 && pageLoaded && width > 1199 && progress < 7}
                        timeout={textTimeout}
                        classNames="services-text-animation"
                        onEnter={() => {}}
                        onExited={() => {this.setProgress(7)}}
                    >
                        <h2 className={progress >= 7 ? 'services-text-animation-enter-done' : ''}>
                            Our technology expertise provides for the most up-to-date, comprehensive, and secure implementations.
                        </h2>
                    </CSSTransition>
                </div>
                <div className="pixoul_tech_logos_container">
                    <div className="pixoul_tech_logos_img_container"><img src={vue} alt="vue" /></div>
                    <div className="pixoul_tech_logos_img_container"><img src={atom} alt="atom" /></div>
                    <div className="pixoul_tech_logos_img_container"><img src={apple} alt="apple" /></div>
                    <div className="pixoul_tech_logos_img_container"><img src={shopify} alt="shopify" /></div>
                    <div className="pixoul_tech_logos_img_container"><img src={android} alt="android" /></div>
                    <div className="pixoul_tech_logos_img_container"><img src={adobe} alt="adobe" /></div>
                    <div className="pixoul_tech_logos_img_container"><img src={angular} alt="angular" /></div>
                    <div className="pixoul_tech_logos_img_container"><img src={magento} alt="magento" /></div>
                </div>
              </div>
              <div className="section">
                <PixoulContactForm
                  heading="Contact us."
                  isAnimated={page === 3}
                  onExited={() => {}}
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

export default ServicesTechSubPage;

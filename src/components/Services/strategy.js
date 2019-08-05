import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import PixoulContactForm from "../ContactForm/index";
import { CSSTransition } from "react-transition-group";
import "./services.css";

import downArrow from "../../images/ic_arrow_forward.png";
// import checkmark from "../../images/checkmark-circle.svg";

import capability_examples from "../../images/capability-examples.svg";

class ServicesStrategySubPage extends React.Component {
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
                    <div className="blue_heading top_about_us_heading mainTitle-animation-enter">
                      Our strategic solutions reduce risk.
                    </div>
                    <div className="top_about_us_heading_text mainText-animation-enter">
                      We'll work with you to find solutions to your most complex challenges.
                    </div>
                </div>

                <button
                  onClick={() => fullpageApi.moveSectionDown()}
                  className="page_down_button_centered pixoul_button services-page-button-animation"
                >
                  <img src={downArrow} alt="downArrow" />
                </button>
              </div>
              <div className="section">
                <div className="pixoul_list_with_checkboxes_container">
                    <div className="pixoul_list_with_checkboxes_row">
                        <div className="pixoul_list_with_checkboxes_row_left_side">
                            <h2>01. Design Thinking Workshops</h2>
                            <p>As a design community, we believe human interaction is at the heart of everything we build.  That’s why our collaborative design process encourages everyone—from analysts to C-suite executives—to help us transform your digital strategy.  We draw on user needs, business objectives, and IT constraints to deliver stratgeic outcomes that deliver maximum, scalable impact.</p>
                        </div>
                        <div className="pixoul_list_with_checkboxes_row_right_side">
                            {/* <img src={checkmark} alt="checkmark" /> */}
                        </div>
                    </div>
                    <div className="pixoul_list_with_checkboxes_row">
                        <div className="pixoul_list_with_checkboxes_row_left_side">
                            <h2>02. Insights & Analytics</h2>
                            <p>We believe transformational strategy starts with powerful data and a focus on consumer insights.  That’s why our research and psychology teams are always digging deeper, helping you understand user sentiment, competitor market positioning, and untapped market potential.  We’ll help you identify new ways of capitalizing on ROI and finding your voice in the digital space.</p>
                        </div>
                        <div className="pixoul_list_with_checkboxes_row_right_side">
                            {/* <img src={checkmark} alt="checkmark" /> */}
                        </div>
                    </div>
                    <div className="pixoul_list_with_checkboxes_row">
                        <div className="pixoul_list_with_checkboxes_row_left_side">
                            <h2>03. Comprehensive Audits</h2>
                            <p>Using benchmark data, we work to understand industry trends, determine unique advantages in your value proposition, and uncover new ways of presenting your digital message.  Our audit process is not only about identifying your organizational strengths and weaknesses, but capitalizing on unfulfilled marketspace.</p>
                        </div>
                        <div className="pixoul_list_with_checkboxes_row_right_side">
                            {/* <img src={checkmark} alt="checkmark" /> */}
                        </div>
                    </div>
                    <div className="pixoul_list_with_checkboxes_row">
                        <div className="pixoul_list_with_checkboxes_row_left_side">
                            <h2>04. Digital Roadmapping</h2>
                            <p>We know each project is unique, and every digital landscape has its own challenges.  That’s why we provide in-depth timeline, budget, and implementation strategies—a complete guide for your digitial path forward.  With our roadmapping services, you’re never wondering what’s next.</p>
                        </div>
                        <div className="pixoul_list_with_checkboxes_row_right_side">
                            {/* <img src={checkmark} alt="checkmark" /> */}
                        </div>
                    </div>
                </div>
              </div>              
              <div className="section">
                <div className="pixoul_capabilities">
                    <div className="pixoul_section_heading full_width">
                        <CSSTransition
                            in={page === 2 && pageLoaded && width > 1199 && progress < 6}
                            timeout={titleTimeout}
                            classNames="services-title-animation"
                            onEnter={() => {}}
                            onExited={() => {this.setProgress(6)}}
                            >
                            <h1 className={progress >= 6 ? 'services-title-animation-enter-done' : ''}>Our capabilities.</h1>
                        </CSSTransition>
                    </div>
                    <div className="pixoul_six_capabilities_img_container">
                        <img src={capability_examples} alt="capabilities" />
                    </div>
                    <div className="pixoul_six_capabilities_grid">
                        <div className="pixoul_six_capabilities_grid_item">
                            <h3 className="blue_heading">User Experience (UX) Design</h3>
                            <p>By combining data insights with psychology research, we’re redefining digital.</p>
                        </div>
                        <div className="pixoul_six_capabilities_grid_item">
                            <h3 className="blue_heading">User Interface (UI) Design</h3>
                            <p>Beautiful interfaces begin with clean, familiar design systems that encourage easy use.</p>
                        </div>
                        <div className="pixoul_six_capabilities_grid_item">
                            <h3 className="blue_heading">Rapid Prototyping</h3>
                            <p>Our iterative, agile methodology promotes a fail-fast approach to designing and implementation.</p>
                        </div>
                        <div className="pixoul_six_capabilities_grid_item">
                            <h3 className="blue_heading">Collaborative Design</h3>
                            <p>Our work takes place at the intersection of business objectives, user needs, and IT capabilities.</p>
                        </div>
                        <div className="pixoul_six_capabilities_grid_item">
                            <h3 className="blue_heading">Accessibility</h3>
                            <p>From color blindness to varying devices, we regard WCAG guidelines for a positive experience for all.</p>
                        </div>
                        <div className="pixoul_six_capabilities_grid_item">
                            <h3 className="blue_heading">User Testing</h3>
                            <p>No design experience is successful without without targeted user feedback, and iterative testing.</p>
                        </div>
                    </div>
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

export default ServicesStrategySubPage;

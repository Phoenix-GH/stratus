import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { CSSTransition } from "react-transition-group";
import PixoulContactForm from "../ContactForm/index";
import "./services.css";

import downArrow from "../../images/ic_arrow_forward.png";
// import checkmark from "../../images/checkmark-circle.svg";

import capability_examples from "../../images/capability-examples.svg";

class ServicesDesignSubPage extends React.Component {
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
      appear: 0,
      enter: 1050,
      exit: 510,
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
                        Digital experience matters.
                      </div>
                      <div className="top_about_us_heading_text mainText-animation-enter">
                        Human-centered design empowers us to rethink user’s needs.
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
                  <CSSTransition
                    in={page === 1 && pageLoaded && width > 1199 && progress < 1}
                    timeout={titleTimeout}
                    classNames="services-title-animation"
                    onEnter={() => {}}
                    onExited={() => {this.setProgress(1)}}
                  >
                    <div className="pixoul_list_with_checkboxes_row">
                      <div className="pixoul_list_with_checkboxes_row_left_side">
                        <h2>01. Design Thinking</h2>
                        <p>Supported by our data and research initiatives, we use industry proven Design Thinking techniques to promote strong user- and human-centered design.  Using empathy and creativity, we inspire, ideate, and implement to create solutions at scale.  We recognize our designs have the opportunity to promote goodwill, and impact entire communities.</p>
                      </div>
                      <div className="pixoul_list_with_checkboxes_row_right_side">
                          {/* <img src={checkmark} alt="checkmark" /> */}
                      </div>
                    </div>
                  </CSSTransition>
                  <CSSTransition
                    in={page === 1 && pageLoaded && width > 1199 && progress < 2}
                    timeout={titleTimeout}
                    classNames="services-title-animation"
                    onEnter={() => {}}
                    onExited={() => {this.setProgress(2)}}
                  >
                    <div className="pixoul_list_with_checkboxes_row">
                        <div className="pixoul_list_with_checkboxes_row_left_side">
                            <h2>02. User Experience Design</h2>
                            <p>Compelling digital experiences begin with an understanding of your goals.  We create value propositions, product strategies, and cultural probes to bring about great design.  From brainstorming challenges to heuristic evaluations, we’re on the front lines of ensuring our product design is accessible, innovative, and empathetic.</p>
                        </div>
                        <div className="pixoul_list_with_checkboxes_row_right_side">
                            {/* <img src={checkmark} alt="checkmark" /> */}
                        </div>
                    </div>
                  </CSSTransition>
                    <div className="pixoul_list_with_checkboxes_row">
                        <div className="pixoul_list_with_checkboxes_row_left_side">
                            <h2>03. User Interface Design</h2>
                            <p>At the end of the day, we know that great experiences neccessitate a beautiful design aesthetic.  We employ modern, simplistic design systems that are simultaneously easy to use and phenominally alluring.  Fully scalable systems include not only basic UI layouts, but also content management, animation, and motion interaction.</p>
                        </div>
                        <div className="pixoul_list_with_checkboxes_row_right_side">
                            {/* <img src={checkmark} alt="checkmark" /> */}
                        </div>
                    </div>
                    <div className="pixoul_list_with_checkboxes_row">
                        <div className="pixoul_list_with_checkboxes_row_left_side">
                            <h2>04. Testing & Analysis</h2>
                            <p>Design begins with great research—and it ends with it, too.  Our agile approach means that testing and iterative design is baked-in to every sprint cycle.  Field studies, guerilla testing, focus groups, and more help us know that every decision is backed by proven data that will significantly impact bottom-line economics.</p>
                        </div>
                        <div className="pixoul_list_with_checkboxes_row_right_side">
                            {/* <img src={checkmark} alt="checkmark" /> */}
                        </div>
                    </div>
                </div>
              </div>              
              <div className="section">
                <div className="pixoul_capabilities">
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
                          <h3 className="blue_heading">Motion & Interaction</h3>
                          <p>Interaction animation is at the forefront on emplying an engaging digital experience.</p>
                      </div>
                      <div className="pixoul_six_capabilities_grid_item">
                          <h3 className="blue_heading">User Testing</h3>
                          <p>No design experience is successful without without targeted user feedback, and iterative testing.</p>
                      </div>
                      <div className="pixoul_six_capabilities_grid_item">
                          <h3 className="blue_heading">Accessibility</h3>
                          <p>From color blindness to varying devices, we regard WCAG guidelines for a positive experience for all.</p>
                      </div>
                      <div className="pixoul_six_capabilities_grid_item">
                          <h3 className="blue_heading">Content Production</h3>
                          <p>Good design affords for your digital message, and meticulously crafts a compelling story. </p>
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

export default ServicesDesignSubPage;

import React from "react";
import { CSSTransition } from "react-transition-group";
import { Route } from "react-router-dom";
import AboutUsPage from "./components/AboutUs/index";
import ServicesPage from "./components/Services/index";
import ProductsPage from "./components/Products/index";
import "./App.css";

import { Header, Menu, Home } from "./components";
import ServicesStrategySubPage from "./components/Services/strategy";
import ServicesDesignSubPage from "./components/Services/design";
import ServicesTechSubPage from "./components/Services/tech";

const cn = require('classnames');
class App extends React.Component {
  state = {
    showMenu: false,
    width: window.innerWidth,
    isTop: true,
  };

  setShowMenu = showMenu => {
    this.setState({ showMenu });
  };

  isTop(el) {
    return el.getBoundingClientRect().top >= 0;
  }
  
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
    document.addEventListener('scroll', this.trackScrolling);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    document.removeEventListener('scroll', this.trackScrolling);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  trackScrolling = () => {
    const wrappedElement = document.getElementsByTagName('body')[0];
    this.setState({ isTop: this.isTop(wrappedElement)})
  };

  toggleMenu = () => {
    this.setShowMenu(!this.state.showMenu);
  };

  onClick = () => {
    const { showMenu } = this.state;
    if(showMenu) {
      this.toggleMenu();
    }
  }

  render() {
    const { showMenu, width, isTop } = this.state;
    const mainClass = cn('', {
      'main-exit-animation-enter-done hand-pointer': showMenu,
    });

    return (
      <div>
        <Menu isVisible={showMenu} onMenuClose={this.toggleMenu} />
        <CSSTransition
          in={showMenu}
          timeout={300}
          classNames="main-exit-animation"
        >
          <div className={mainClass} onClick={this.onClick}>
            <Header
              onMenuClick={this.toggleMenu}
              isAnimated={width > 1199}
              whiteMode={!isTop}
            />
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} isMenuVisible={showMenu} />}
            />
            <Route exact path="/work" component={Home} />
            <Route
              exact
              path="/aboutus"
              render={(props) => <AboutUsPage {...props} isMenuVisible={showMenu} />}
            />
            <Route
              exact
              path="/services" 
              render={(props) => <ServicesPage {...props} isMenuVisible={showMenu} />}
            />
            <Route
              exact
              path="/services-strategy" 
              render={(props) => <ServicesStrategySubPage {...props} isMenuVisible={showMenu} />}
            />
            <Route
              exact
              path="/services-design" 
              render={(props) => <ServicesDesignSubPage {...props} isMenuVisible={showMenu} />}
            />
            <Route
              exact
              path="/services-tech" 
              render={(props) => <ServicesTechSubPage {...props} isMenuVisible={showMenu} />}
            />
            <Route
              path="/products" 
              render={(props) => <ProductsPage {...props} isMenuVisible={showMenu} />}
            />
          </div>
        </CSSTransition>

      </div>
    );
  }
}

export default App;

import React from "react";
import "./products.css";

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-item">
          <h4>The Ask</h4>
          <p>
            Create and brand a business marketpalce, including a full-service
          </p>
        </div>
        <div className="sidebar-item">
          <h4>Services</h4>
          <p>
            UX Research & Analysis
            <br/>
            High-Fidelity UI Design
            <br/>
            User Testing
            <br/>
            Front-End Development
          </p>
        </div>
        <div className="sidebar-item">
          <h4>Tools</h4>
          <p>
            Balsamiq
            <br/>
            Sketch
            <br/>
            InVision
            <br/>
            Atom
          </p>
        </div>
      </div>
    );
  }
}

export default SideBar;

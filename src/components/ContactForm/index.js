import React, { Component } from "react";
import PropTypes from 'prop-types';
import { CSSTransition } from "react-transition-group";
import * as emailjs from 'emailjs-com';
import "./contact-form.css";

class ContactForm extends Component {
  static propTypes = {
    delay: PropTypes.number,
  }

  static defaultProps = {
    delay: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    interestedIn: '',
  }

  state = {
    loaded: false,
  }

  onExited = () => {
    const { delay } = this.props;
    if(delay === 0) {
      this.setState({ loaded: true });
      this.props.onExited();
    }
  }

  onChange = (item, event) => {
    this.setState({ [item]: event.target.value });
  }

  sendEmail = e => {
   e.preventDefault();
   const { firstName, lastName, phone, email, interestedIn } = this.state;
   const service_id = "default_service";
   const template_id = "template_3l1ZvrRp";
   emailjs.send(service_id,
    template_id, {
      "email": email,
      "first_name": firstName,
      "last_name": lastName,
      "phone": phone,
      "interestedIn": interestedIn,
    }, 
    'user_y5b1msGPAYKIW4szoHygG')
    .then((response) => {
        alert('Email sent!');
    }, (err) => {
        alert('Failed, please try again later');
    });
  }

  render() {
    const { loaded } = this.state;
    const { heading, isAnimated, delay } = this.props;
    let timeout = {
      appear: 0 + delay,
      enter: 1000 + delay,
      exit: 600,
    };

    let subtitleTimeout = {
      appear: 500 + delay,
      enter: 1000 + delay,
      exit: 600,
    };

    let formTimeout = {
      appear: 600 + delay,
      enter: 1000 + delay,
      exit: 600,
    };

    const titleClass = delay > 0 ? 'contact-title-animation' : 'contact-title-animation-nodelay';
    const subtitleClass = delay > 0 ? 'contact-subtitle-animation' : 'contact-subtitle-animation-nodelay';
    const formClass = delay > 0 ? 'form-slide-animation' : 'form-slide-animation-nodelay';

    return (
      <div className="contact_section_container">
        <div className="contact-background" />
        <CSSTransition
          in={isAnimated && !loaded}
          timeout={timeout}
          classNames={titleClass}
          onEnter={() => {}}
          onExited={() => {}}
        >
          <span className="contact_section_heading">{heading}</span>
        </CSSTransition>
        <div className="contact-section">
          <div className="contact_section_form_container">
            <CSSTransition
              in={isAnimated && !loaded}
              timeout={subtitleTimeout}
              classNames={subtitleClass}
            >
              <h2><b>Stratus Digital</b> Marketing Agency</h2>
            </CSSTransition>
            <CSSTransition
              in={isAnimated && !loaded}
              timeout={subtitleTimeout}
              classNames={subtitleClass}
            >
              <h3><a href="tel:16306494473">+1 (630) 649-4473</a></h3>
              </CSSTransition>
          </div>
          <div className="contact_section_form_container">
            <CSSTransition
              in={isAnimated && !loaded}
              timeout={formTimeout}
              classNames={formClass}
              onExited={this.onExited}
            >
              <div className="form-animation-container">
              <form className="contact_section_form" autoComplete="on" id="email-form"  onSubmit={this.sendEmail}>
                <div className="group">
                  <input
                    type="text"
                    id="given-name"
                    required="required"
                    name="given-name"
                    onChange={(text) => this.onChange('firstName', text)}
                  />
                  <label htmlFor="contact_form_first_name">
                    First Name <span className="asterix">*</span>
                  </label>
                </div>
                <div className="group">
                  <input
                    type="text"
                    id="family-name"
                    required="required"
                    name="family-name"
                    onChange={(text) => this.onChange('lastName', text)}
                  />
                  <label htmlFor="contact_form_last_name">
                    Last Name <span className="asterix">*</span>
                  </label>
                </div>
                <div className="group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required="required"
                    autoComplete="email"
                    onChange={(text) => this.onChange('email', text)}
                  />
                  <label htmlFor="contact_form_email">
                    Email <span className="asterix">*</span>
                  </label>
                </div>
                <div className="group">
                  <input
                    type="tel"
                    name="tel"
                    id="contact_form_phone"
                    required="required"
                    autoComplete="tel"
                    onChange={(text) => this.onChange('phone', text)}
                  />
                  <label htmlFor="contact_form_phone">
                    Phone <span className="asterix">*</span>
                  </label>
                </div>
                <div className="group group_last_child">
                  <input
                    type="text"
                    id="contact_form_interest"
                    required="required"
                    onChange={(text) => this.onChange('interestedIn', text)}
                  />
                  <label htmlFor="contact_form_interest">
                    I'm Interested In...<span className="asterix">*</span>
                  </label>
                </div>
                <div className="contact_form_submit_btn_container">
                  <button className="contact_form_submit_btn" value="submit">
                    Send
                  </button>
                </div>
              </form>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  onExited: PropTypes.func,
}

ContactForm.defaultProps = {
  onExited: () => {},
}
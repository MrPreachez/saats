import "./BusinessForm.scss";
import React, { forwardRef, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const BusinessForm = forwardRef(({ businessFormTopRef, homeTopRef }, ref) => {
  const form = useRef();
  const navigate = useNavigate();

  const scrollToHomeTop = () => {
    if (homeTopRef.current) {
      homeTopRef.current.scrollIntoView({
        behavior: "smooth",
        top: 0,
      });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "membershipForm001",
        e.target,
        "AsXnJHA7LiVbtOW3g"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            `Thank you for you support, once your payment is received we will update your membersip status`
          );
          navigate("/");
          setTimeout(scrollToHomeTop, 100);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <main className="businessform__section" ref={businessFormTopRef}>
      <h2 className="businessform__title">Annual Business Membership</h2>
      <p className="businessform__text">
        To become an annual business supporter of the Slocan and Area Trail
        Society, please fill out the member form details below and send an
        e-transfer from your institution for $100.00 to:
        <p className="businessform__email">
          www.slocanandareatrailsociety@gmail.com
        </p>
      </p>
      <form
        ref={form}
        id="myForm"
        onSubmit={sendEmail}
        className="businessform__form"
      >
        <div className="businessform__subject--wrapper">
          <h3 className="businessform__subject-title">
            Annual Business Membership Form
          </h3>
        </div>
        <div className="businessform__name--wrapper">
          <label className="businessform__name businessform__label">
            Business Name
          </label>
          <input
            className="businessform__name-field businessform__field"
            type="text"
            placeholder="ENTER YOUR BUSINESS NAME"
            name="business_name"
          />
        </div>
        <div className="businessform__name--wrapper">
          <label className="businessform__name businessform__label">
            Contact Name
          </label>
          <input
            className="businessform__name-field businessform__field"
            type="text"
            placeholder="ENTER CONTACT FULL NAME"
            name="business_contact-name"
          />
        </div>
        <div className="businessform__email--wrapper">
          <label className="businessform__email-label businessform__label">
            Email
          </label>
          <input
            className="businessform__email-field businessform__field"
            type="email"
            placeholder="ENTER BUSINESS EMAIL"
            name="business_email"
          />
        </div>
        <div className="businessform__area--wrapper">
          <label className="businessform__area businessform__label">
            Business Address
          </label>
          <input
            className="businessform__area-field businessform__field"
            type="text"
            placeholder="ENTER BUSINESS ADDRESS"
            name="business_address"
          />
        </div>

        <div className="businessform__message--wrapper">
          <label className="businessform__message businessform__label">
            Business Details
          </label>
          <textarea
            className="businessform__message-field businessform__field"
            placeholder="PLEASE SHARE ANY RELEVENT INFORMATION ABOUT YOUR BUSINESS WITH US"
            name="messageB"
          />
        </div>

        <input className="businessform__button" type="submit" value="Send" />
      </form>
    </main>
  );
});

export default BusinessForm;

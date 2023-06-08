import "./DonateForm.scss";
import React, { forwardRef, useRef } from "react";
import emailjs from "@emailjs/browser";

const DonateForm = forwardRef(({ donateFormTopRef }, ref) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "default_service",
        "template_69jhlbc",
        form.current,
        "AsXnJHA7LiVbtOW3g"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <main className="donateform__section" ref={donateFormTopRef}>
      <h2 className="donateform__title">Make a Donation to SATS</h2>
      <h3 className="donateform__subheading">
        "Your donation makes a difference in our mission to maintain and build
        trails in the Slocan area!"
      </h3>
      <div className="donateform__text-body">
              <p className="donateform__text1">
        To make a donation the Slocan and Area Trail Society, please{" "}
        <b>first</b> send your donation via etransfer from your institution to:
        <span className="donateform__mailto">
          {" "}
          slocanandareatrailsociety@gmail.com
        </span>
      </p>
      <p className="donateform__text2">
        Once your transfer is sent, please fill out the form below and{" "}
        <b>include </b>
        the <b>'Additional Details'</b> in the message section. Please be sure
        to indicate if you would like a receipt and we will issue one via the
        means you specify. We will confirm with you once we receive your
        donation (may take up to a week).
      </p>
      <p className="donateform__text3">
        Please <b>copy and paste</b> these details into the message section and
        complete the details.
      </p>
      <div className="donateform__addDetails--wrapper">
        <div>
          <ul className="donateform__addDetails">
            <h3 className="donateform__addDetails-head">Additional Details</h3>
            <li className="donateform__item">Donation Value:</li>
            <li className="donateform__item">Require Receipt:</li>
            <li className="donateform__item">
              Receipt Method - email/physical:
            </li>
            <li className="donateform__item">Send receipt to:</li>
            <li className="donateform__item">
              Transfer was sent from which institution?
            </li>
            <li className="donateform__item">Transfer Id:</li>
            <li className="donateform__item">Any other details:</li>
          </ul>
        </div>
      </div>
      </div>


      <form ref={form} onSubmit={sendEmail} className="donateform__form">
        <div className="donateform__subject--wrapper">
          <label className="donateform__subject donateform__label">
            Subject
          </label>
          <input
            className="donateform__subject-field donateform__field"
            type="text"
            placeholder="ENTER MESSAGE SUBJECT"
            name="from_subject"
          />
        </div>
        <div className="donateform__name--wrapper">
          <label className="donateform__name donateform__label">Name</label>
          <input
            className="donateform__name-field donateform__field"
            type="text"
            placeholder="ENTER YOUR NAME"
            name="from_name"
          />
        </div>
        <div className="donateform__email--wrapper">
          <label className="donateform__email donateform__label">Email</label>
          <input
            className="donateform__email-field donateform__field"
            type="email"
            placeholder="ENTER YOUR EMAIL"
            name="from_email"
          />
        </div>
        <div className="donateform__message--wrapper">
          <label className="donateform__message donateform__label">
            Message
          </label>
          <textarea
            className="donateform__message-field donateform__field"
            placeholder="ENTER MESSAGE HERE"
            name="message"
          />
        </div>

        <input className="donateform__button" type="submit" value="Send" />
      </form>
    </main>
  );
});

export default DonateForm;

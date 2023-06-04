import "./ContactPage.scss"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactPage(){
    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b5v6xym",
        "contact_form",
        form.current,
        "Eke_eWLPEeWg5w8Yi"
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
    <main className="contact__section">
      <h2 className="contact__title">Contact Damon by email</h2>
      <form ref={form} onSubmit={sendEmail} className="contact__form">
        <div className="contact__subject--wrapper">
          <label className="contact__subject contact__label">Subject</label>
          <input
            className="contact__subject-field contact__field"
            type="text"
            placeholder="ENTER MESSAGE SUBJECT"
            name="from_subject"
          />
        </div>
        <div className="contact__name--wrapper">
          <label className="contact__name contact__label">Name</label>
          <input
            className="contact__name-field contact__field"
            type="text"
            placeholder="ENTER YOUR NAME"
            name="from_name"
          />
        </div>
        <div className="contact__email--wrapper">
          <label className="contact__email contact__label">Email</label>
          <input
            className="contact__email-field contact__field"
            type="email"
            placeholder="ENTER YOUR EMAIL"
            name="from_email"
          />
        </div>
        <div className="contact__message--wrapper">
          <label className="contact__message contact__label">Message</label>
          <textarea
            className="contact__message-field contact__field"
            placeholder="ENTER MESSAGE HERE"
            name="message"
          />
        </div>

        <input className="contact__button" type="submit" value="Send" />
      </form>
    </main>
  );
}

export default ContactPage;

import "./MemberForm.scss";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function MemberForm() {
  const form = useRef();

  const [volunteerCheckbox, setVolunteerCheckbox] = useState(false);
  const [activityCheckboxA, setActivityCheckboxA] = useState(false);

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
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <main className="memberform__section">
      <h2 className="memberform__title">Member Form</h2>
      <p>
        To become a member of the Slocan and Area Trail Society, please fill out
        the memberform form details below and send an e-transfer from your
        institution for `(${})` to: www.slocanandareatrailsociety@gmail.com
      </p>
      <form
        ref={form}
        id="myForm"
        onSubmit={sendEmail}
        className="memberform__form"
      >
        <div className="memberform__subject--wrapper">
          <label className="memberform__subject memberform__label">
            Subject
          </label>
          <input
            className="memberform__subject-field memberform__field"
            type="text"
            placeholder="ENTER MESSAGE SUBJECT"
            name="from_subject"
          />
        </div>
        <div className="memberform__name--wrapper">
          <label className="memberform__name memberform__label">
            First Name
          </label>
          <input
            className="memberform__name-field memberform__field"
            type="text"
            placeholder="ENTER YOUR FIRST NAME"
            name="first_name"
          />
        </div>
        <div className="memberform__name--wrapper">
          <label className="memberform__name memberform__label">
            Last Name
          </label>
          <input
            className="memberform__name-field memberform__field"
            type="text"
            placeholder="ENTER YOUR LAST NAME"
            name="last_name"
          />
        </div>
        <div className="memberform__email--wrapper">
          <label className="memberform__email memberform__label">Email</label>
          <input
            className="memberform__email-field memberform__field"
            type="email"
            placeholder="ENTER YOUR EMAIL"
            name="member_email"
          />
        </div>
        <div className="memberform__area--wrapper">
          <label className="memberform__area memberform__label">Location</label>
          <input
            className="memberform__area-field memberform__field"
            type="text"
            placeholder="ENTER THE NEAREST TOWN OR CITY YOU LIVE BY"
            name="member_area"
          />
        </div>
        <div className="memberform__volunteering--wrapper">
          <input
            className="volunteerCheckbox memberform__field"
            type="checkbox"
            id="volunteerID"
            checked={volunteerCheckbox}
            name="volunteerCheckbox"
            onChange={(e) => setVolunteerCheckbox(e.target.checked)}
          />
          <label className="memberform__volunteering memberform__label">
            Check the box if your are interested in hearing about volunteer
            opportunities? Share more details about your skills below.
          </label>
        </div>
        <p>What activities do you enjoy doing on local trails.</p>
        <div className="memberform__activity--wrapperA">
          <input
            className="activityCheckboxA memberform__field"
            type="checkbox"
            id="activityID"
            checked={activityCheckboxA}
            name="activityCheckboxA"
            onChange={(e) => setActivityCheckboxA(e.target.checked)}
          />
          <label className="memberform__volunteering memberform__label">
            mountain biking
          </label>
        </div>
        <div className="memberform__message--wrapper">
          <label className="memberform__message memberform__label">
            Tell Us About Yourself
          </label>
          <textarea
            className="memberform__message-field memberform__field"
            placeholder="PLEASE SHARE ANY RELEVENT INFORMATION ABOUT YOURSELF"
            name="message"
          />
        </div>

        <input className="memberform__button" type="submit" value="Send" />
      </form>
    </main>
  );
}

export default MemberForm;

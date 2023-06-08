import "./MemberForm.scss";
import React, { forwardRef, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const MemberForm = forwardRef(({ memberFormTopRef, homeTopRef }, ref) => {
  const form = useRef();
  const navigate = useNavigate();

  const [volunteerCheckbox, setVolunteerCheckbox] = useState(false);
  const [activityCheckboxA, setActivityCheckboxA] = useState(false);
  const [activityCheckboxB, setActivityCheckboxB] = useState(false);
  const [activityCheckboxC, setActivityCheckboxC] = useState(false);
  const [activityCheckboxD, setActivityCheckboxD] = useState(false);
  const [activityCheckboxE, setActivityCheckboxE] = useState(false);
  const [activityCheckboxF, setActivityCheckboxF] = useState(false);
  const [activityCheckboxG, setActivityCheckboxG] = useState(false);
  const [activityCheckboxH, setActivityCheckboxH] = useState(false);
 
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
            `Thank you for your support.  Your annual membership will become active once we receive your member fee of $10. `
          );
          navigate("/");
          setTimeout(scrollToHomeTop), 100;
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <main className="memberform__section" ref={memberFormTopRef}>
      <h2 className="memberform__title">Annual Membership Form</h2>
      <p className="memberform__text">
        To become a member of the Slocan and Area Trail Society, please fill out
        the member form details below and send an e-transfer from your
        institution for $10.00 to:
        <p className="memberform__email">
          www.slocanandareatrailsociety@gmail.com
        </p>
      </p>
      <form
        ref={form}
        id="myForm"
        onSubmit={sendEmail}
        className="memberform__form"
      >
        <div className="memberform__subject--wrapper">
          <h3 className="memberform__subject-title">Membership Form</h3>
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
          <label className="memberform__email-label memberform__label">Email</label>
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
            placeholder="ENTER CITY OR TOWN YOU LIVE NEAR"
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
            opportunities? Share more details about your interest and experience
            below.
          </label>
        </div>
        <p className="memberform__activity-title">
          What activities do you enjoy doing on local trails.
        </p>
        <div className="memberform__activity-Container">
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
              Mountain Biking
            </label>
          </div>
          <div className="memberform__activity--wrapperB">
            <input
              className="activityCheckboxB memberform__field"
              type="checkbox"
              id="activityID"
              checked={activityCheckboxB}
              name="activityCheckboxB"
              onChange={(e) => setActivityCheckboxB(e.target.checked)}
            />
            <label className="memberform__volunteering memberform__label">
              Hiking
            </label>
          </div>
          <div className="memberform__activity--wrapperC">
            <input
              className="activityCheckboxC memberform__field"
              type="checkbox"
              id="activityID"
              checked={activityCheckboxC}
              name="activityCheckboxC"
              onChange={(e) => setActivityCheckboxC(e.target.checked)}
            />
            <label className="memberform__volunteering memberform__label">
              Dirt Biking
            </label>
          </div>
          <div className="memberform__activity--wrapperD">
            <input
              className="activityCheckboxD memberform__field"
              type="checkbox"
              id="activityID"
              checked={activityCheckboxD}
              name="activityCheckboxD"
              onChange={(e) => setActivityCheckboxD(e.target.checked)}
            />
            <label className="memberform__volunteering memberform__label">
              ATV-ing
            </label>
          </div>
          <div className="memberform__activity--wrapperE">
            <input
              className="activityCheckboxE memberform__field"
              type="checkbox"
              id="activityID"
              checked={activityCheckboxE}
              name="activityCheckboxE"
              onChange={(e) => setActivityCheckboxE(e.target.checked)}
            />
            <label className="memberform__volunteering memberform__label">
              E-Biking
            </label>
          </div>
          <div className="memberform__activity--wrapperF">
            <input
              className="activityCheckboxF memberform__field"
              type="checkbox"
              id="activityID"
              checked={activityCheckboxF}
              name="activityCheckboxF"
              onChange={(e) => setActivityCheckboxF(e.target.checked)}
            />
            <label className="memberform__volunteering memberform__label">
              Horseback Riding
            </label>
          </div>
          <div className="memberform__activity--wrapperG">
            <input
              className="activityCheckboxG memberform__field"
              type="checkbox"
              id="activityID"
              checked={activityCheckboxG}
              name="activityCheckboxG"
              onChange={(e) => setActivityCheckboxG(e.target.checked)}
            />
            <label className="memberform__volunteering memberform__label">
              Snowmobiling
            </label>
          </div>
          <div className="memberform__activity--wrapperH">
            <input
              className="activityCheckboxH memberform__field"
              type="checkbox"
              id="activityID"
              checked={activityCheckboxH}
              name="activityCheckboxH"
              onChange={(e) => setActivityCheckboxH(e.target.checked)}
            />
            <label className="memberform__volunteering memberform__label">
              Other
            </label>
          </div>
        </div>

        <div className="memberform__message--wrapper">
          <label className="memberform__message memberform__label">
            Tell Us About Yourself
          </label>
          <textarea
            className="memberform__message-field memberform__field"
            placeholder="PLEASE SHARE ANY RELEVENT SKILLS, INTERESTS OR IDEAS"
            name="messageA"
          />
        </div>
        <input className="memberform__button" type="submit" value="Send" />
      </form>
    </main>
  );
});

export default MemberForm;

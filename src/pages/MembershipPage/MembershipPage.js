import { forwardRef } from "react";
import "./MembershipPage.scss";
import { useNavigate } from "react-router-dom";

const MembershipPage = forwardRef(
  (
    {
      memberTopRef,
      donateSectionRef,
      memberFormTopRef,
      businessFormTopRef,
      donateFormTopRef,
    },
    ref
  ) => {
    const navigate = useNavigate();

    const scrollToTopFormA = () => {
      if (memberFormTopRef) {
        memberFormTopRef.current.scrollIntoView({
          behavior: "smooth",
          top: 0,
        });
      }
    };
    const handleGeneralMemberBtn = () => {
      navigate("/memberform");
      setTimeout(scrollToTopFormA, 100);
    };

    const scrollToTopFormB = () => {
      if (businessFormTopRef) {
        businessFormTopRef.current.scrollIntoView({
          behavior: "smooth",
          top: 0,
        });
      }
    };
    const handleBusinessMemberBtn = () => {
      navigate("/businessform");
      setTimeout(scrollToTopFormB, 100);
    };
    const scrollToTopFormC = () => {
      if (donateFormTopRef) {
        donateFormTopRef.current.scrollIntoView({
          behavior: "smooth",
          top: 0,
        });
      }
    };
    const handleDonateFormBtn = () => {
      navigate("/donateform");
      setTimeout(scrollToTopFormC, 100);
    };
    return (
      <section className="memberpage" id="memberTop" ref={memberTopRef}>
        <section className="memberpage__hero">
          <div className="memberpage__filter">
            <div className="memberHero__body">
              <div className="memberHero__title--position">
                <h1 className="memberHero__title1">
                  Join a Community of Trail Users
                </h1>
                <h2 className="memberHero__title2">Become a Member Today</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="memberInfo__body">
          <h2 className="memberInfo__title">Society Membership</h2>
          <div className="memberInfo__container">
            <p className="memberInfo__details">
              SATS is more than just a non-profit society - we are a community
              of passionate individuals dedicated to preserving and improving
              access to the backcountry roads and trails we love. As a member of
              SATS, you will have the opportunity to connect with like-minded
              individuals who share your interests and values. Our community is
              diverse and welcoming, with members ranging from hikers and
              bikers, ATV’ers, horse enthusiasts and everything in between. We
              believe that everyone should have access to our backcountry areas,
              and our members share a commitment to preserving and improving
              that access in a responsible way. As a member of SATS, you will
              have access to a variety of benefits, including:
            </p>
            <div className="memberInfo__benefits-container"></div>
            <ul className="memberInfo__benefits">
              <li className="memberInfo__item">
                Access to exclusive events and volunteer opportunities
              </li>
              <li className="memberInfo__item">
                Opportunities to connect with other trail users and share your
                experiences
              </li>
              <li className="memberInfo__item">
                Future special offers that we hope to include
              </li>
              <li className="memberInfo__item">
                The opportunity to play a role in the future of backcountry
                access and trail development in our community
              </li>
            </ul>
            <p className="memberInfo__details">
              We believe that our members are the heart and soul of SATS, and we
              are committed to providing a supportive and inclusive community
              for all. Whether you're a seasoned trail veteran or just starting
              out, we welcome you to join us and help us build a brighter future
              for backcountry road access and trail development around Slocan.
            </p>
          </div>
        </section>
        <section className="options__body">
          <h2 className="options__title">Membership</h2>
          <div className="options__card--contain">
            <div className="options__card-wrapA">
              <section className="options__cardA options__card">
                <h3 className="options__title">General Membership</h3>
                <h3 className="options__price">$10.00</h3>
                <p className="options__details">
                  Get an anual membership and support SATS initiatives. Future
                  member perks will follow in time, but for now bask in the
                  opportunity to support local trail enhancement projects and
                  planning.
                </p>
                <button
                  onClick={handleGeneralMemberBtn}
                  className="options__buyBTN"
                >
                  Buy
                </button>
              </section>
            </div>
            <div className="options__card-wrapB">
              <section className="options__cardB options__card">
                <h3 className="options__title">Business Membership</h3>
                <h3 className="options__price">$100.00</h3>
                <p className="options__details">
                  Your Businesses annual membership makes a big difference to
                  building and maintaining SATS. With your generous contribution
                  your logo will be highlighted on our sponsorship page and on
                  annual promotional material.
                </p>
                <button
                  onClick={handleBusinessMemberBtn}
                  className="options__buyBTN"
                >
                  Buy
                </button>
              </section>
            </div>
          </div>
        </section>
        <section
          className="donate__body"
          id="donateSection"
          ref={donateSectionRef}
        >
          <h2 className="donate__heading">Donate to SATS</h2>
          <h4 className="donate__subheading">Support Our Efforts</h4>

          <section className="donate__card">
            <h2 className="donate__title">Donation</h2>
            <h3 className="donate__price">$$$$</h3>
            <p className="donate__details">
              A donation to SATS keeps the chain oiled, increases our capacities
              and goes directly back into the process of building and sustaining
              trails in the Slocan Area.
            </p>
            <button className="donate__buyBTN" onClick={handleDonateFormBtn}>
              Donate
            </button>
          </section>
          <p className="donate__text">
            A donation to SATS goes back into your community. All donations will
            be used for operations directly related to trail maintenance and
            building new trails in the Area. We will keep our members informed
            to our activities as much as possible through our website and social
            media channels. We greatly appreciate all donations, whether its $10
            or $1000, it all makes a difference. With a generous donation of{" "}
            <b>$300</b> and up, you can request to have your name or business
            logo added to our 'Community Supporters' section and promotional
            material for one year.
          </p>
        </section>
      </section>
    );
  }
);

export default MembershipPage;

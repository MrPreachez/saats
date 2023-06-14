import "./HomePage.scss";
import map1 from "../../assets/images/Location Map of proposed area .png";
// import map2 from "../../assets/images/Map of Proposed work area.png";
import { useSpring, useInView, animated as a } from "@react-spring/web";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { forwardRef } from "react";

const HomePage = forwardRef(
  (
    {
      homeTopRef,
      aboutSectionRef,
      newsSectionRef,
      memberTopRef,
      donateSectionRef,
    },
    ref
  ) => {
    const navigate = useNavigate();
    const location = useLocation();

    const spring1 = useSpring({
      from: { opacity: 0, x: 200 },
      to: { opacity: 1, x: 0 },
      config: { mass: 4, friction: 100, tension: 200 },
    });
    const spring2 = useSpring({
      from: { opacity: 0, x: -300 },
      to: { opacity: 1, x: 0 },
      config: { mass: 4, friction: 100, tension: 200 },
    });
    const [ref1, springsA] = useInView(() => ({
      from: {
        opacity: 0,
        x: 300,
      },
      to: {
        opacity: 1,
        x: 0,
        config: {
          mass: 5,
          friction: 100,
          tension: 300,
        },
      },
    }));

    const [ref2, springsB] = useInView(() => ({
      from: {
        opacity: 0,
        x: -200,
      },
      to: {
        opacity: 1,
        x: 0,
        config: {
          mass: 5,
          friction: 100,
          tension: 300,
        },
      },
    }));
    const [ref3, springsC] = useInView(() => ({
      from: {
        opacity: 0,
        x: -200,
      },
      to: {
        opacity: 1,
        x: 0,
        config: {
          mass: 5,
          friction: 100,
          tension: 300,
        },
      },
    }));
    const [ref4, springsD] = useInView(() => ({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,

        config: {
          mass: 1,
          friction: 100,
          tension: 300,
        },
      },
    }));
    const scrollToTopSection = () => {
      if (memberTopRef.current) {
        memberTopRef.current.scrollIntoView({
          behavior: "smooth",
          top: 0,
        });
      }
    };
    const scrollToDonate = () => {
      if (donateSectionRef.current) {
        donateSectionRef.current.scrollIntoView({
          bevior: "smooth",
          block: "center",
        });
      }
    };
    const handleMemberPageClick = (e) => {
      e.preventDefault();
      if (location.pathname !== "/membership") {
        navigate("/membership");
        setTimeout(scrollToTopSection, 500);
      } else {
        scrollToTopSection();
      }
    };
    const handleDonateSectionClick = (e) => {
      e.preventDefault();
      if (location.pathname !== "/membership") {
        navigate("/membership");
        setTimeout(scrollToDonate, 500);
      } else {
        scrollToDonate();
      }
    };

    return (
      <main className="homePage__body" ref={homeTopRef}>
        <section className="head__hero">
          <div className="head__body">
            <div className="head__title--position">
              <a.h1 style={spring1} className="head__title1">
                Slocan and Area
              </a.h1>
              <a.h2 style={spring2} className="head__title2">
                Trail Society
              </a.h2>
            </div>
            <div className="head__CTA--position">
              <button
                className="head__CTA-member head__CTA"
                onClick={handleMemberPageClick}
              >
                Become a Member
              </button>
              <button
                className="head__CTA-donate head__CTA"
                onClick={handleDonateSectionClick}
              >
                Make a Donation
              </button>
            </div>
          </div>
        </section>
        <section className="org__block">
          <div className="org__container">
            <section className="org__body" id="mission" ref={aboutSectionRef}>
              <h2 className="org__title">
                <span className="org__feature" />
                About
                <span className="org__feature" />
              </h2>
              <div className="about__section" id="about">
                <h3 className="about__title">Slocan and Area Trail Society</h3>
                <p className="about__intro">
                  Welcome to SATS, a non-profit society dedicated to preserving
                  backcountry road access, maintaining existing roads and
                  trails, and developing new trails for our community's
                  non-commercial use. Our organization is proud to be led by a
                  diverse board representing a wide range of recreational
                  interests. We believe in preserving access for both motorized
                  and non-motorized users, with the goal of creating a variety
                  of options for all trail users.
                </p>
              </div>
              <div className="org__flex--wrapper">
                <div className="board__section">
                  <h3 className="board__title">Board of Directors</h3>
                  <ul className="board__list-members">
                    <li className="board__member">Jessie Novak - Chair</li>
                    <li className="board__member">
                      Blaise Beckjord - Vice Chair
                    </li>
                    <li className="board__member">
                      Damon Chouinard - Treasurer
                    </li>
                    <li className="board__member">
                      Courtney Hulbert - Secretary
                    </li>
                    <li className="board__member">
                      Dave Fredrickson - General Director
                    </li>
                  </ul>
                </div>
                <div className="mission__section">
                  <a.h3
                    ref={ref2}
                    style={springsB}
                    className="mission__description-title"
                  >
                    Our Mission
                  </a.h3>
                  <a.div
                    ref={ref1}
                    style={springsA}
                    className="mission__description"
                  >
                    <ul className="mission__list">
                      <li className="mission__item">
                        Provide a sustainable network of recreational trails for
                        a diverse range of users
                      </li>
                      <li className="mission__item">
                        Help preserve public access to public land
                      </li>
                      <li className="mission__item">
                        Respect and recognition for First Nations' and wildlife
                        interest
                      </li>
                      <li className="mission__item">
                        Partnership and Collaboration with other user groups and
                        members of the public (ie. land owners, tenure holders,
                        licensee holders)
                      </li>
                      <li className="mission__item">
                        Preserve the culture heritage of the area
                      </li>
                      <li className="mission__item">
                        Secure recreation opportunities for all trail users
                      </li>
                      <li className="mission__item">
                        Provide educational opportunities for the public
                      </li>
                      <li className="mission__item">
                        Empower youth to work on trail building opportunities
                        and related community service mission
                      </li>
                    </ul>
                  </a.div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="current__body" id="news" ref={newsSectionRef}>
          <h2 className="current__title">
            <span className="current__feature" />
            Current Activities
            <span className="current__feature" />
          </h2>
          <div className="current__container--wrapper">
            <a.p ref={ref3} style={springsC} className="current__text">
              We are thrilled to announce that SATS has received authorization
              from Recreation Sites and Trails BC to perform basic maintenance
              on the Ottawa Hill trail network in the vicinity of Slocan, BC.
              Comprised of old mining/resource roads, this unmanaged trail is in
              need of brushing, minor drainage works, and bucking. All work
              during this phase will be carried out by volunteers, with the aim
              to begin before fire season. The green lines on the following map
              represents the discussed area. <br />
              Looking ahead, we are excited to develop an engagement process for
              the community that considers the interests and concerns of
              community members and user groups. Our aim is to create a
              recreation plan for the area that aligns with BC's trails
              strategy, benefiting recreationists, communities, First Nations,
              and the province as a whole. As we progress with this exciting
              endeavor, we are continuing to garner support from our community
              members, local businesses, and stakeholders.
              <Link to="/"></Link>
            </a.p>
            <a.div
              ref={ref4}
              style={springsD}
              className="current__imgContainer"
            >
              <img src={map1} className="current__imgPhoto" alt="alt-text" />
            </a.div>
          </div>
        </section>
      </main>
    );
  }
);

export default HomePage;

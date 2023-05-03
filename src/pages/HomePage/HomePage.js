import "./HomePage.scss";
import { useSpring, useInView, animated as a } from "@react-spring/web";
import { Link } from "react-router-dom";
import { forwardRef } from "react";

const HomePage = forwardRef(({}, ref2) => {
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
  const spring3 = useSpring({
    from: { opacity: 0, y: 200 },
    to: { opacity: 1, y: 0 },
    config: { mass: 5, friction: 100, tension: 200 },
  });
  const [ref, springs4] = useInView(() => ({
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
  const [ref1, springs5] = useInView(() => ({
    from: {
      opacity: 0,
      y: 200,
    },
    to: {
      opacity: 1,
      y: 0,
      config: {
        mass: 1,
        friction: 50,
        tension: 300,
      },
    },
  }));

  return (
    <main className="homePage__body">
      <section className="head__hero">
        <div className="head__body">
          <div className="head__title-position">
            <a.h1 style={spring1} className="head__title1">
              Slocan and Area
            </a.h1>
            <a.h2 style={spring2} className="head__title2">
              Trail Society
            </a.h2>
          </div>
          <div className="head__description-position">
            <h3 className="head__description-title">Our Mission</h3>
            <a.p style={spring3} className="head__description">
              <p>
                • Provide a sustainable network of recreational trails for a
                diverse range of users
              </p>
              <p>• Help preserve public access to public land</p>
              <p>
                • Respect and recognition for First Nations' and wildlife
                interest
              </p>
              <p>
                • Partnership and Collaboration with other user groups and
                members of the public (ie. land owners, tenure holders, licensee
                holders)
              </p>
              <p>• Preserve the culture heritage of the area</p>
              <p>• Secure recreation opportunities for all trail users</p>
              <p>• Provide educational opportunities for the public</p>
              <p>
                • Empower youth to work on the trail building and related
                community service projects
              </p>{" "}
            </a.p>
          </div>
        </div>
      </section>

      <section className="projects__body" ref={ref2} id="projects">
        <h2 className="projects__title">
          <span className="projects__feature" />
          Projects
          <span className="projects__feature" />
        </h2>
      </section>
      <section className="about__body">
        <h2 className="about__title">
          <span className="about__feature" />
          About
          <span className="about__feature" />
        </h2>
        <div className="about__container--wrapper">
          <a.p ref={ref} style={springs4} className="about__text">
            Born and raised in BC, I grew up just outside of Vancouver. I
            currently live, work and play in the Socan Valley, just outside of
            Nelson...<Link to="/about">more</Link>
          </a.p>
          <div className="about__imgContainer">
            <a.img
              ref={ref1}
              style={springs5}
              src={""}
              className="about__imgPhoto"
              alt="alt-text"
            />
          </div>
        </div>
      </section>
    </main>
  );
});

export default HomePage;

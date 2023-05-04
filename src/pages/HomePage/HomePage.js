import "./HomePage.scss";
import { useSpring, useInView, animated as a } from "@react-spring/web";
import { Link } from "react-router-dom";
import { forwardRef } from "react";

const HomePage = forwardRef(({}, ref4) => {
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
        mass: 2,
        friction: 60,
        tension: 150,
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
        </div>
      </section>

      <section className="mission__body" ref={ref4} id="mission">
        <h2 className="mission__title">
          <span className="mission__feature" />
          About
          <span className="mission__feature" />
        </h2>
        <h3 className="mission__description-title">Our Mission</h3>
        <a.p ref={ref1} style={springsA} className="mission__description">
          <p>
            • Provide a sustainable network of recreational trails for a diverse
            range of users
          </p>
          <p>• Help preserve public access to public land</p>
          <p>
            • Respect and recognition for First Nations' and wildlife interest
          </p>
          <p>
            • Partnership and Collaboration with other user groups and members
            of the public (ie. land owners, tenure holders, licensee holders)
          </p>
          <p>• Preserve the culture heritage of the area</p>
          <p>• Secure recreation opportunities for all trail users</p>
          <p>• Provide educational opportunities for the public</p>
          <p>
            • Empower youth to work on the trail building and related community
            service mission
          </p>{" "}
        </a.p>
      </section>
      <section className="current__body">
        <h2 className="current__title">
          <span className="current__feature" />
          current
          <span className="current__feature" />
        </h2>
        <div className="current__container--wrapper">
          <a.p ref={ref2} style={springsB} className="current__text">
            Born and raised in BC, I grew up just outside of Vancouver. I
            currently live, work and play in the Socan Valley, just outside of
            Nelson...<Link to="/current">more</Link>
          </a.p>
          <div className="current__imgContainer">
            <a.img
              ref={ref3}
              style={springsC}
              src={""}
              className="current__imgPhoto"
              alt="alt-text"
            />
          </div>
        </div>
      </section>
    </main>
  );
});

export default HomePage;

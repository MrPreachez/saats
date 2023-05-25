import "./MembershipPage.scss";

function MembershipPage() {
  return (
    <section className="memberpage">
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
        <h2>Society Membership</h2>
        <p>
          SAATS is more than just a non-profit society - we are a community of
          passionate individuals dedicated to preserving and improving access to
          the backcountry roads and trails we love. As a member of SATS, you
          will have the opportunity to connect with like-minded individuals who
          share your interests and values. Our community is diverse and
          welcoming, with members ranging from hikers and bikers, ATV’ers, horse
          enthusiasts and everything in between. We believe that everyone should
          have access to our backcountry areas, and our members share a
          commitment to preserving and improving that access in a responsible
          way. As a member of SATS, you will have access to a variety of
          benefits, including:
        </p>
        <ul>
          <li>* Access to exclusive events and volunteer opportunities</li>
          <li>
            * Opportunities to connect with other trail users and share your
            experiences
          </li>
          <li>* Future special offers that we hope to include</li>
          <li>
            * The opportunity to play a role in the future of backcountry access
            and trail development in our community
          </li>
        </ul>
        <p>
          We believe that our members are the heart and soul of SAATS, and we
          are committed to providing a supportive and inclusive community for
          all. Whether you're a seasoned trail veteran or just starting out, we
          welcome you to join us and help us build a brighter future for
          backcountry road access and trail development around Slocan.
        </p>
      </section>
      <section className="options__body">
        <h2 className="options__title">Membership</h2>
        <div className="options__card--contain">
          <div className="options__card-wrapA">
            <section className="options__cardA options__card">
              <h3 className="options__title">General Membership</h3>
              <h3 className="options__price">$15.00</h3>
              <p className="options__details">
                Get an anual membership and support SATS initiatives. Future
                member perks will follow in time, but for now bask in the
                opportunity to support local trail enhancement projects and
                planning.
              </p>
              <button className="options__buyBTN">Buy</button>
            </section>
          </div>
          <div className="options__card-wrapB">
            <section className="options__cardB options__card">
              <h3 className="options__title">Business Membership</h3>
              <h3 className="options__price">$100.00</h3>
              <p className="options__details">
                Your Businesses annual membership makes a big difference to
                building and maintaining SATS. With your generous contribution
                your logo will be highlighted on our sponsorship
                page and on annual promotional material.  
              </p>
              <button className="options__buyBTN">Buy</button>
            </section>
          </div>
        </div>
      </section>
      <form className="memberform__body">
        <input></input>
      </form>
    </section>
  );
}

export default MembershipPage;

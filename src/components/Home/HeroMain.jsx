import React from 'react'

function HeroMain() {
  return (
    <main>
    <div className="container">
      <div className="grid hero-main">
        <div className="hero-main-content">
          <h2>Get affordable, same-day coverage in no time.</h2>
          <p>
            With roots over a century deep in the birthplace of the
            automobile industry, USA Underwriters has the knowledge and
            expertise to help tailor a policy to suit your lifestyle, your
            budget, and your priorities.
          </p>
          <div className="hero-main-content-buttons">
            <button className="btn">Report a Claim</button>
            <button className="btn learn-more">
              Learn More
              <img src="/icons/arrow-long-right.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="hero-main-image">
          <img src="/images/hero-bg.png" alt="" />
        </div>
      </div>
    </div>
  </main>
  )
}

export default HeroMain
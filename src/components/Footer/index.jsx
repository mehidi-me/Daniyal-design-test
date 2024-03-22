"use client"
function Footer() {
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div>
      <footer>
        <div className="container">
          <div className="grid">
            <div className="footer-item">
              <h3>USA Underwriter</h3>
              <p>NAIC #: 30457</p>
              <p>P.O. Box 2426</p>
              <p>Rancho Cucamonga, CA, 91729</p>
            </div>
            <div className="footer-item">
              <h3>Underwriting Support</h3>
              <p>
                <img src="/icons/clock.svg" alt="" />
                Monday - Friday, 9:00 am - 6:00 pm ET
              </p>
              <p>
                <img src="/icons/phone.svg" alt="" />
                +1 (248) 541-2800
              </p>
              <p>
                <img src="/icons/envelope.svg" alt="" />
                customerservice@usaunderwriters.com
              </p>
            </div>
            <div className="footer-item">
              <h3>Underwriting Support</h3>
              <p>
                <img src="/icons/clock.svg" alt="" />
                Monday - Friday, 9:00 am - 6:00 pm ET
              </p>
            </div>
          </div>
          <div className="grid">
            <div className="footer-item">
              <h3>Customer Service &amp; Support</h3>
              <p>
                <img src="/icons/clock.svg" alt="" />
                Monday - Friday, 9:00 am - 6:00 pm ET
              </p>
              <p>
                <img src="/icons/phone.svg" alt="" />
                +1 (248) 541-2800
              </p>
              <p>
                <img src="/icons/envelope.svg" alt="" />
                customerservice@usaunderwriters.com
              </p>
            </div>
            <div className="footer-item">
              <h3>Claims Administration</h3>
              <p>
                <img src="/icons/clock.svg" alt="" />
                Monday - Friday, 9:00 am - 6:00 pm ET
              </p>
              <p>
                <img src="/icons/phone.svg" alt="" />
                +1 (248) 541-2800
              </p>
              <p>
                <img src="/icons/map-pin.svg" alt="" />
                P.O. Box 647 | Battle Creek, MI 49016
              </p>
            </div>
            <div className="footer-item">
              <div className="footer-item-heading">
                <h3>PIP Qualification Question and Submissions for Coverage</h3>
                <img src="/icons/chevron-down.svg" alt="" />
              </div>
              <div className="footer-item-details">
                <p>
                  <img src="/icons/phone.svg" alt="" />
                  +1 (248) 541-2800
                </p>
                <p>
                  <img src="/icons/envelope.svg" alt="" />
                  customerservice@usaunderwriters.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>
              Copyright 2022 USA Underwriters |{" "}
              <b>Privacy Policy | Terms of Use</b>
            </p>
            <p>( Built by Neutrix - Powered by Neutrix Systems )</p>
          </div>
        </div>
      </footer>
      <div className="scroll-to-top" onClick={scrollToTop}>
        <img src="/icons/angle-double-up.svg" alt="" />
      </div>
    </div>
  );
}

export default Footer;

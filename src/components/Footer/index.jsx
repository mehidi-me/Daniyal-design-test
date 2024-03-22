"use client";

import { useState } from "react";

function Footer() {
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const Accordion = ({ title, children, isActive = false }) => {
    const [isOpen, setOpen] = useState(isActive);
    return (
      <div className="footer-item">
        <div
          className={`footer-item-heading ${isOpen ? "open" : ""}`}
          onClick={() => setOpen(!isOpen)}
        >
          <h3>{title}</h3>
          <img
            src={isOpen ? `/icons/chevron-up.svg` : `/icons/chevron-down.svg`}
            alt=""
          />
        </div>
        <div className={`footer-item-details ${isOpen ? "active" : ""}`}>
          {children}
        </div>
      </div>
    );
  };
  return (
    <div>
      <footer>
        <div className="container">
          <div className="grid">
            <Accordion isActive={true} title={"USA Underwriter"}>
              <p>NAIC #: 30457</p>
              <p>P.O. Box 2426</p>
              <p>Rancho Cucamonga, CA, 91729</p>
            </Accordion>
            <Accordion title={"Underwriting Support"}>
              <p>NAIC #: 30457</p>
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
            </Accordion>
            <Accordion title={"Policy Suspensions And Coverage Approvals"}>
              <p>
                <img src="/icons/clock.svg" alt="" />
                Monday - Friday, 9:00 am - 6:00 pm ET
              </p>
            </Accordion>
          </div>
          <div className="grid">
            <Accordion isActive={true} title="Customer Service &amp; Support">
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
            </Accordion>
            <Accordion title="Claims Administration">
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
            </Accordion>
            <Accordion title="PIP Qualification Question and Submissions for Coverage">
              <p>
                <img src="/icons/phone.svg" alt="" />
                +1 (248) 541-2800
              </p>
              <p>
                <img src="/icons/envelope.svg" alt="" />
                customerservice@usaunderwriters.com
              </p>
            </Accordion>
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

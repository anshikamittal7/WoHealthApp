import React from "react";

const Header = () => {
  return (
    <nav className="navbar">
      <h2 className="title">WoHealth</h2>
      <div className="navitems">
        <div className="dropdown">
          <button
            className="btn dropdown-toggle text-white dwnbtn"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            About
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a href="#menstTrack">Menstruation Tracking</a>
            </li>
            <hr />
            <li>
              <a href="#conception">Preparation of Conception</a>
            </li>
            <hr />
            <li>
              <a href="#pregnancy">Pregnancy</a>
            </li>
            <hr />
            <li>
              <a href="#earlymotherhood">Early Motherhood</a>
            </li>
            <hr />
            <li>
              <a href="#menopause">Menopause</a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <button
            className="btn dropdown-toggle text-white dwnbtn"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Resources
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a href="womenhealthres">Women's Health Resources</a>
            </li>
            <hr />
            <li>
              <a href="telehealth">Telehealth</a>
            </li>
            <hr />
            <li>
              <a href="classNamees">classNamees</a>
            </li>
            <hr />
            <li>
              <a href="share">Share Your Journey</a>
            </li>
            <hr />
            <li>
              <a href="faq">Women's Health FAQ</a>
            </li>
          </ul>
        </div>

        <a>Contact</a>
        <button className="login">Login/SignUp</button>
      </div>
    </nav>
  );
};

export default Header;

import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul className="links">
        <li>
          <p>comming soon</p>
          <a href="#">Trading</a>
        </li>
        <li className="vertical-line"></li>
        <li>
          <p>comming soon</p>
          <a href="#">Automation</a>
        </li>
        <li className="vertical-line"></li>

        <li>
          <p>comming soon</p>
          <a href="#">portfolio</a>
        </li>
        <li className="vertical-line"></li>

        <li>
          <a className="active" href="#">
            Alerts
          </a>
        </li>
        <li className="vertical-line"></li>

        <li>
          <a href="#">training</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

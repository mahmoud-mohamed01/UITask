import React from "react";
import "./Header.css";
import { FaBell } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <div>
      <header>
        <div className="logo">
          <img src="./streetsuitelogo-04.png" alt="" />
        </div>
        <div className="search">
          <div className="search-left">
            <input placeholder="&#xf002; search" type="text" name="search" />
          </div>
          <div className="search-right">
            <div className="bell">
              <button>
                <FaBell></FaBell>
              </button>
            </div>
            <div className="avatar">
              <img src="./avatar.png" alt="" />
            </div>
            <div className="user-info">
              <h4>Moni Roy</h4>
              <p>Admin</p>
            </div>
            <div className="drop-menu">
              <button>
                <FaArrowDown></FaArrowDown>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

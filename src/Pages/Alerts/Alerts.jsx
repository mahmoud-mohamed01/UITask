import React from "react";
import { FaBell } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";
import { BiSolidCoinStack } from "react-icons/bi";

import "./Alerts.css";
function Alerts() {
  const data = [
    "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y if the deal fails.",
    "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y if the deal fails.",
    "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y if the deal fails.",
    "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y if the deal fails.",
    "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y if the deal fails.",
    "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y if the deal fails.",
  ];
  return (
    <section className="container">
      <div className="alerts">
        <aside className="filters">
          <form action="">
            <h2>Filters</h2>

            <div className="form-item">
              <label htmlFor="">industry</label>
              <select name="" id="">
                <option value="">&#xf05d; Health care</option>
                <option value="">&#xf05d; Health care</option>
                <option value="">&#xf05d; Health care</option>
              </select>
              <p>choose item</p>
            </div>

            <div className="form-item">
              <label htmlFor="">Market Cap</label>
              <select name="" id="">
                <option value="">&#xf05d; Large Cap</option>
                <option value="">&#xf05d; Large Cap</option>
                <option value="">&#xf05d; Large Cap</option>
              </select>
              <p>choose item</p>
            </div>

            <div className="form-item">
              <label htmlFor="">Risk</label>
              <select name="" id="">
                <option value="">&#xf05d; low risk</option>
                <option value="">&#xf05d; mid risk</option>
                <option value="">&#xf05d; High risk</option>
                <option value="">&#xf05d; Option text here</option>
              </select>
              <p>choose item</p>
            </div>
            <button className="btn">Apply Filters</button>
          </form>
        </aside>
        <div className="main-alerts">
          <div className="alerts-head">
            <div className="alerts-icons">
              <div>
                <FaDollarSign /> <span>$TSLA</span>
              </div>
              <div className="seprate">|</div>
              <div>
                <IoDocumentTextOutline></IoDocumentTextOutline>
                <span>200 Contracts</span>
              </div>
              <div className="seprate">|</div>
              <div>
                <FaChartLine></FaChartLine>
                <span>12.4%</span>
              </div>
              <div className="seprate">|</div>

              <div>
                <BiSolidCoinStack></BiSolidCoinStack>
                <span>High risk</span>
              </div>
            </div>
            <p>
              Someone Just bought xxxx contracts of $XYZ, this is notable
              because the relative volume on this options trade is X.X%.
            </p>
          </div>
          <div className="alert-content">
            <p>
              X company released a short report on $XYZ, High IV option sales
              opps
            </p>
          </div>
          {data.map((txt, idx) => {
            return (
              <div className="alert-content" key={idx}>
                <p>{txt}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Alerts;

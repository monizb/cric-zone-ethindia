import React, { useState } from "react";
import "../styles/DaoPage.css";

function DaoPage() {
  const [style, setStyle] = useState("vote-btn");
  const changeStyle = () => {
    console.log("clicked vote");
    setStyle("vote-btn2");
  };
  return (
    <div className="dao-page">
      {/* <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/nDsIy6kRhms"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}
      <div className="main-container">
        <div className="left-container">
          <h2>Total Treasery Value 6,000,000 USD</h2>
          <h2>Total Members 10,000</h2>
          <h3>#1 -- 4,000,000 CRKT</h3>
          <h3>#2 -- 100 ETH</h3>
          <h3>#3 -- 100,000 USDC</h3>
          <h3>#4 -- 50,000 Others</h3>
        </div>
        <div className="left-container">
          <h2>Members By Holding</h2>
          <h3>#1 -- 100,000 CRKT</h3>
          <h3>#2 -- 70,000 CRKT</h3>
          <h3>#3 -- 50,000 CRKT</h3>
          <h3>#4 -- 40,000 CRKT</h3>
          <h3>#5 -- 10,000 CRKT</h3>
        </div>
        <div className="right-container">
          <div className="proposal-card">
            <h3 className="proposal-heading">#13 Send 1,000,000 CRKT to wallet 2 for buying a IPL Team</h3>
            <div className="voting-options-container">
              <h4 className={style} onClick={changeStyle}>
                For ⚫
              </h4>
              <h4>Against ⚫</h4>
              <h4>Abstrain ⚫</h4>
            </div>
          </div>
          <div className="proposal-card">
            <h3 className="proposal-heading">#12 Buy 10 world cup tickets for DAO members</h3>
            <div className="voting-options-container">
              <h4>For ⚫</h4>
              <h4 className={style} onClick={changeStyle}>
                Against ⚫
              </h4>
              <h4>Abstrain ⚫</h4>
            </div>
          </div>
          <div className="proposal-card">
            <h3 className="proposal-heading">#11 Send 100,000 CRKT to wallet 3 for signing Rohit Sharma as the brand ambassador of Cricket DAO.</h3>
            <div className="voting-options-container">
              <h4 className={style} onClick={changeStyle}>
                For ⚫
              </h4>
              <h4>Against ⚫</h4>
              <h4>Abstrain ⚫</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaoPage;

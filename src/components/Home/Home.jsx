import React, { Component } from "react";
import "./Home.css";

const Home = (props) => {
  //   console.log("is checked", props, props.isChecked, props.checked);
  return (
    <React.Fragment>
      <div id="Home" className="tablet:grid-col padding-x-2">
        <p>Before using this symptom checker, please read this carefully:</p>
        <ul>
          <li>This checkup is not a diagnosis.</li>
          <li>This checkup is for informational purposes and is not a qualified medical opinion.</li>
          <li>Information that you provide is anonymous and not shared with anyone. We also do not store any information on our server.</li>
        </ul>
      </div>

      <div className="tablet:grid-col">{/* <img src="/images/TOS.png" /> */}</div>
    </React.Fragment>
  );
};

export default Home;

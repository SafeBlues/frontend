import React from "react";
import Button from "@material-ui/core/Button";
import "./Header.css";

export default function Header(props) {
  return (
    <div className={"root"}>
      <div className={"logoContainer"}>
        <svg
          id="logo"
          width="40px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 158 158"
        >
          <title>Icon main</title>
          <g fill="#3e7edd">
            <path d="M22.4,10c3.89,0-.92,25.2,12.75,38.26,17.84,17.05,47-5.83,82.9,11.48,16.3,7.86,26.94,20.61,25.51,23-2,3.25-24.87-17.47-43.36-10.21-19.68,7.73-13.67,39-43.37,62.5-9.14,7.22-19.13,11.77-20.4,10.2-1.93-2.36,20.22-13.58,23-31.88,4-26.67-41.1-39.46-43.36-77.8C15.24,22.35,19.68,10,22.4,10Z" />
          </g>
        </svg>
      </div>
      <h1>{props.title}</h1>
      <Button color="inherit" href="https://www.safeblues.org/experiment">
        Experiment Home
      </Button>

      <Button color="inherit" href="/stats">
        Leader board
      </Button>
      <Button color="inherit" href="/join">
        Join
      </Button>
      <Button color="inheirt" href="/referral">
        Refer a Friend
      </Button>
    </div>
  );
}

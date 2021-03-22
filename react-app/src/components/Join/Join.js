import { List, ListItem } from "@material-ui/core";
import React from "react";

export default function Join() {
  return (
    <div className={"root"}>
      <h1>Joining The Safe Blues 2021 Experiment</h1>
      <p>
        Thank you for your interest in joining the Safe Blues campus experiment.
        If you are over 16, plan to attend the University of Auckland city
        campus during parts of 2021, and have an Android mobile device you are
        welcomed to join. You are advised to first read the online participant
        information sheet. 
        {/* TODO  add the link and recreate the information sheet*/}
      </p>
      <h2>
          Follow these 5 steps to join:
      </h2>
      <form>

      <ol>
          <li>
              Download the Safe Blues app from Google Play Store.

              The app provides you with your unique private 10 digit <strong>Participant ID</strong> which you can write down or see whenever you launch the app.
          </li>
          <li>
            Enter your Participant ID to link it to your email address.
            <input type="text" onChange={this.updateEmail} name="email" />

            
          </li>
      </ol>


      </form>
    </div>
  );
}

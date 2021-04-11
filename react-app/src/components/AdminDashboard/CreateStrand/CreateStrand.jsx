import React from "react";
import {useState} from "react"
import TextInput from "components/TextInputHooks/TextInputHooks";
import { Button } from "@material-ui/core";
function CreateStrand(props) {
    const [strand, setStrand] = useState()
    const [strand2, setStrand2] = useState()
    var payload = {"val1": strand, "val2": strand2}
  return (
    <div>
      <h2>Create new strands</h2>
      <p>Content coming soon</p>
      <div className="form">
        <TextInput
          label="Email"
          type="email"
          varname="email"
          setter={setStrand}
        />
        <TextInput
          label="Password"
          type="password"
          varname="password"
          setter={setStrand2}
        />
        <Button
          variant="contained"
          color="primary"
        //   onClick={(event) => this.handleSubmit(event)}
        >
          Submit
        </Button>
        <p>Current payload: {JSON.stringify(payload)}</p>
      </div>
    </div>
  );
}

export default CreateStrand;

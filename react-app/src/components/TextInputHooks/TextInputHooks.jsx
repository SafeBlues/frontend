import React, { useState } from "react";
import "./TextInputHooks.css";
import { TextField } from "@material-ui/core";

/**
 * A text input form that uses a hook to set the state of the variable
 * that you are passing in through the props
 * @param {label, type, varname, setter} props
 * @returns a text input form
 *
 */
export default function TextInput(props) {
  return (
    <div className="container">
      <TextField
        id="outlined-basic"
        label={props.label}
        variant="outlined"
        fullWidth
        type={props.type}
        onChange={(event) => props.setter(event.target.value)}
        dense="true"
      />
    </div>
  );
}

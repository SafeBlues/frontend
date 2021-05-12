import React, { useState } from "react";
import "./TextInput.css";
import { TextField } from "@material-ui/core";

export default function TextInput(props) {
  return (
    <div className="container">
      <TextField
        id="outlined-basic"
        label={props.label}
        variant="outlined"
        fullWidth
        type={props.type}
        onChange={(event) => props.setter(props.varname, event.target.value)}
        dense="true"
      />
    </div>
  );
}

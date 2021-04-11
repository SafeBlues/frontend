import React from "react";
import { useState } from "react";
import TextInput from "components/TextInputHooks/TextInputHooks";
import { Button } from "@material-ui/core";
function CreateStrand(props) {
  const [strandId, setStrandId] = useState();
  const [seedingProbability, setSeedingProbability] = useState();
  const [infectionProbabilityMapP, setInfectionProbabilityMapP] = useState();
  const [infectionProbabilityMapK, setInfectionProbabilityMapK] = useState();
  const [infectionProbabilityMapL, setInfectionProbabilityMapL] = useState();
  const [
    incubationPeriodHoursAlpha,
    setIncubationPeriodHoursAlpha,
  ] = useState();
  const [incubationPeriodHoursBeta, setIncubationPeriodHoursBeta] = useState();
  const [
    infectiousPeriodHoursAlpha,
    setInfectiousPeriodHoursAlpha,
  ] = useState();
  const [infectiousPeriodHoursBeta, setInfectiousPeriodHoursBeta] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const strandParameterKeys = [
    { name: "strandId", type: "number", setter: setStrandId },
    {
      name: "seedingProbability",
      type: "number",
      setter: setSeedingProbability,
    },
    {
      name: "infectionProbabilityMapP",
      type: "number",
      setter: setInfectionProbabilityMapP,
    },
    {
      name: "infectionProbabilityMapK",
      type: "number",
      setter: setInfectionProbabilityMapK,
    },
    {
      name: "infectionProbabilityMapL",
      type: "number",
      setter: setInfectionProbabilityMapL,
    },
    {
      name: "incubationPeriodHoursAlpha",
      type: "number",
      setter: setIncubationPeriodHoursAlpha,
    },
    {
      name: "incubationPeriodHoursBeta",
      type: "number",
      setter: setIncubationPeriodHoursBeta,
    },
    {
      name: "infectiousPeriodHoursAlpha",
      type: "number",
      setter: setInfectiousPeriodHoursAlpha,
    },
    {
      name: "infectiousPeriodHoursBeta",
      type: "number",
      setter: setInfectiousPeriodHoursBeta,
    },
    { name: "startTime", type: "datetime-local", setter: setStartTime },
    { name: "endTime", type: "datetime-local", setter: setEndTime },
  ];
  // just gets the names array
  // const strandParameters = strandParameterKeys.map(key => Object.values(key)[0])
 var payload = {
    strandId: strandId,
    seedingProbability: seedingProbability,
    infectionProbabilityMapP: infectionProbabilityMapP,
    infectionProbabilityMapK: infectionProbabilityMapK,
    infectionProbabilityMapL: infectionProbabilityMapL,
    incubationPeriodHoursAlpha: incubationPeriodHoursAlpha,
    incubationPeriodHoursBeta: incubationPeriodHoursBeta,
    infectiousPeriodHoursAlpha: infectiousPeriodHoursAlpha,
    infectiousPeriodHoursBeta: infectiousPeriodHoursBeta,
    startTime: startTime,
    endTime: endTime,
  };
  return (
    <div>
      <h2>Create new strands</h2>
      <p>Content coming soon</p>
      <div className="form">
        {/* TODO map the strand parameter keys into text inputs */}
        {strandParameterKeys.map((key) => (
          <TextInput
            label={key.name}
            type={key.type}
            varname={key.name}
            setter={key.setter}
          />
        ))}
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

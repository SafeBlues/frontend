import React from "react";
import "./ShowStrands.css";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function ShowStrands(props) {
  var rows = [];
  for (const strand in props.data) {
    rows.push(Object.values(props.data[strand]));
  }
  var columns;
  if (props.columnNames) {
    columns = props.columnNames;
  } else {
    columns = Object.keys(props.data[0]);
  }
  return (
    <div className="showStrandsContainer">
      {/* props.data:{JSON.stringify(props.data)} */}

      <TableContainer component={Paper}>
        <Table className="table" size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              {columns.map((col) => (
                <TableCell>{col}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.strandData.map((row) => (
              <TableRow key={row.name}>
                {Object.keys(row).map((key) => (
                  <TableCell component="th" scope="row">
                    {row[key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ShowStrands;

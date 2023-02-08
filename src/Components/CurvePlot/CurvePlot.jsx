import {
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  LineChart,
} from "recharts";
import React from "react";
import { CustomTooltip } from "./CustomTooltip";

export const CurvePlot = ({ curve, showCurve, onClose }) => {
  if (!showCurve) {
    return null;
  }
  var result = [];
  for (var i = 0; i < curve.x.length; i++) {
    var val = {};
    val["x"] = curve.x[i];
    val["y"] = curve.y[i];
    result.push(val);
  }

  return (
    <div className="modal" id="modal">
      <h2>Selected Curve</h2>
      <div className="curveContent">
        <LineChart width={600} height={300} data={result}>
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{
              paddingLeft: "10px",
              width: 150,
              backgroundColor: "#ccc",
            }}
          />
          <XAxis />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="x" stroke="#8884d8" />
          <Line type="monotone" dataKey="y" stroke="#82ca9d" />
        </LineChart>
      </div>
      <div className="actions">
        <button className="toggle-button" onClick={onClose}>
          close
        </button>
      </div>
    </div>
  );
};

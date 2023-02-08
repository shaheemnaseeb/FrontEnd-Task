import {
  ScatterChart,
  Scatter,
  Tooltip,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import React, { useState } from "react";
import { CustomTooltip } from "./CustomTooltip";
import { Modal } from "../Modal/Modal";
import { getCurve } from "../../api";
import { CurvePlot } from "../CurvePlot/CurvePlot";

export const ScatterPlot = (props) => {
  const { points, selection } = props;
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [curve, setCurve] = useState(null);
  const [showCurve, setShowCurve] = useState(false);
  const handleClick = (e) => {
    if (selection === 1) {
      const { payload } = e || {};
      if (payload) {
        setSelectedPoint(payload);
        setShowModal(true);
      }
    } else if (selection === 2) {
      const { id } = e || {};
      if (id) {
        fetchCurve(id);
      }
    }
  };

  const fetchCurve = (id) => {
    getCurve(id).then((curve) => {
      setCurve(curve);
      setShowCurve(true);
    });
  };

  return (
    <div>
      {
        <Modal
          showModal={showModal}
          selectedPoint={selectedPoint}
          onClose={() => setShowModal(false)}
        />
      }
      {
        <CurvePlot
          curve={curve}
          showCurve={showCurve}
          onClose={() => setShowCurve(false)}
        />
      }
      <ScatterChart onClick={handleClick} width={800} height={500}>
        <Tooltip
          content={<CustomTooltip />}
          wrapperStyle={{
            paddingLeft: "10px",
            width: 150,
            backgroundColor: "#ccc",
          }}
        />
        <CartesianGrid />
        <XAxis type="number" dataKey="row" />
        <YAxis type="number" dataKey="col" />
        <Scatter onClick={handleClick} data={points} name="points">
          {points.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Scatter>
      </ScatterChart>
    </div>
  );
};

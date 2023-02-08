import { getAllPoints } from "./api";
import { useState, useEffect } from "react";
import { ScatterPlot } from "./Components/ScatterPlot/ScatterPlot";

function App() {
  const [points, setPoints] = useState([]);
  const [selection, setSelection] = useState(1)

  useEffect(() => {
    getAllPoints().then((points) => {
      setPoints(points);
    });
  }, []);


  return (
    <div className="main">
      <div className="chart">
        <ScatterPlot points={points} selection={selection} />
      </div>
      <div className="dropdown">
        <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
          <a href="/#" onClick={() => setSelection(1)}>Point Info</a>
          <a href="/#" onClick={() => setSelection(2)}>Curve Info</a>
        </div>
      </div>
    </div>
  );
}

export default App;

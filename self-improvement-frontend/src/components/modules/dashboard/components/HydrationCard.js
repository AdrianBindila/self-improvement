import { useState } from "react";
import WaterGlass from "./WaterGlass";

function HydrationCard() {
  const [no, setNo] = useState(3);
  if (no > 8) setNo(8);
  if (no < 0) setNo(0);
  return (
    <div className="card col-6">
      <WaterGlass no={no} />
      <div className="card-body">
        <h5 className="card-title">HYDRATION METER</h5>
        <p className="card-text">
          The average adult should drink 8 glasses of water per day. Instead of
          grabbing another can of fruit juice or soda, try a cool and crisp
          glass of water.
        </p>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => setNo((prev) => prev + 1)}
        >
          <img src="assets/plus-lg.svg" width="32" height="32" />
        </button>
        <button
          className="btn btn-warning btn-lg mx-5"
          onClick={() => setNo((prev) => prev - 1)}
        >
          <img src="assets/dash-lg.svg" width="32" height="32" />
        </button>
      </div>
    </div>
  );
}
export default HydrationCard;
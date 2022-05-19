import { useState } from "react";

function Hydration() {
  const [num, setNum] = useState(0);
  return (
    <div className="card w-25 mx-auto text-center">
      <div className="card-body">
        <h1 className="card-title mb-lg-5">Hydration tracker</h1>
        <h1 className="mb-lg-5">
          You have drank <div className="display-1">{num}</div> glasses of water
          today.
        </h1>
        <button
          className="w-100 btn btn-lg btn-primary my-2"
          onClick={() =>
            setNum((prev) => {
              return prev + 1;
            })
          }
        >
          Drink another glass
        </button>
      </div>
    </div>
  );
}
export default Hydration;

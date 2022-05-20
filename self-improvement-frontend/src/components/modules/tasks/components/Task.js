import { useState } from "react";

function Task(props) {
  return (
    <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded task">
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input m-2"
          id="checkbox"
        />
        <label class="custom-control-label" id="defaultUnchecked">
          Default unchecked
        </label>
      </div>
    </li>
  );
}
export default Task;

import { useState } from "react";

function Task(props) {
  function handleChange(event) {
    const { name, value } = event.target;
    props.setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  }
  return (
    <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded task">
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input m-2"
          id="checkbox"
          name="isChecked"
          onChange={() => {handleChange(props.task.id)}}
        />
        <label className="custom-control-label">{props.task.text}</label>
      </div>
    </li>
  );
}
export default Task;

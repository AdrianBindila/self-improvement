import { useState } from "react";
import { updateTask } from "../../../../api/task";

function Task(props) {
  const [task, setTask] = useState(props.task);
  function handleChange(event) {
    const { name, value } = event.target;
    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
    updateTask(task.id);
  }
  return (
    <li className="list-group-item d-flex align-items-center border-0 mb-2 rounded task" key={props.task.id}>
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input m-2"
          name="isChecked"
          onChange={handleChange}
          value={task.isChecked}
        />
        <label className="custom-control-label">{props.task.text}</label>
      </div>
    </li>
  );
}
export default Task;

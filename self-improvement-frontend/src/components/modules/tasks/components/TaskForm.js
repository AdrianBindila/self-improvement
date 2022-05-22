import { useState } from "react";
import { sendTask } from "../../../../api/task";

function TaskForm(props) {
  const [task, setTask] = useState({
    text: "",
    isChecked: false,
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setTask((prevLogin) => {
      return {
        ...prevLogin,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    sendTask(task);
    props.setTasks([...props.tasks, task]);
    setTask({
      text: "",
      isChecked: false,
    });
    event.preventDefault();
  }
  return (
    <form
      className="d-flex justify-content-center align-items-center mb-4"
      onSubmit={handleSubmit}
    >
      <div className="form-floating flex-fill">
        <input
          type="text"
          className="form-control"
          placeholder="Task Name"
          
          name="text"
          value={task.text}
          onChange={handleChange}
        />
        <label>New Task</label>
      </div>
      <button type="submit" className="btn btn-lg btn-primary my-2 mx-2">
        Add
      </button>
    </form>
  );
}
export default TaskForm;

import { useEffect, useState } from "react";
import { getTasks } from "../../../../api/task";
import CompressedTaskList from "./CompressedTaskList";
import TaskList from "./TaskList";

function TaskCard() {
    const user = JSON.parse(localStorage.getItem("user"));

    const [tasks, setTasks] = useState(
      JSON.parse(localStorage.getItem("tasks")) || []
    );
    useEffect(() => {
      getTasks(user.id);
      setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
    }, []);
  return (
    <div className="col card">
      <div className="card-title">ONGOING TASKS</div>
      <div className="card-body">
        <TaskList tasks={tasks} setTasks={setTasks}/>
      </div>
    </div>
  );
}
export default TaskCard;

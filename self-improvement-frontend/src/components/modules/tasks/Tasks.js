import { useEffect, useState } from "react";
import { getTasks } from "../../../api/task";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function Tasks() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  useEffect(() => {
    getTasks(user.id);
    setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
  }, []);
  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-5">
                <TaskForm tasks={tasks} setTasks={setTasks} />
                <TaskList tasks={tasks} setTasks={setTasks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Tasks;

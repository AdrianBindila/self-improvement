import { useEffect, useState } from "react";
import { getTasks,removeTask } from "../../../../api/task";
import Task from "./Task";

function TaskList(props) {
 
  function deleteTask(id) {
    props.setTasks(props.tasks.filter((task) => task.id !== id));
    removeTask(id);
  }
  return (
    <div className="tab-content">
      <div className="tab-pane fade show active">
        <ul className="list-group mb-0">
          {props.tasks.map((task, index) => {
            return (
              <div className="row">
                <div className="col">
                  <Task key={index} task={task} />
                </div>
                <button
                  className="btn btn-danger col-1"
                  onClick={() => {
                    deleteTask(task.id);
                  }}
                >
                  X
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default TaskList;

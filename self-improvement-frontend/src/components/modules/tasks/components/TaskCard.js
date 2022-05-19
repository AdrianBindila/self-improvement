import CompressedTaskList from "./CompressedTaskList";

function TaskCard(){
    const userTasks={
        
    }
    return <div className="col card">
    <div className="card-title">ONGOING TASKS</div>
    <div className="card-body">
        <CompressedTaskList/>
    </div>
    </div>
}
export default TaskCard;
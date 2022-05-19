import Task from "./Task";

function CompressedTaskList() {
  return (
    <div className="tab-content">
    <div className="tab-pane fade show active">
      <ul className="list-group mb-0">
        <Task text="Hello" isChecked={true}/>
        <Task text="Hello" isChecked={false}/>
        <Task text="Hello" isChecked={false}/>
        <Task text="Hello" isChecked={true}/>
      </ul>
    </div>
  </div>
  );
}
export default CompressedTaskList;

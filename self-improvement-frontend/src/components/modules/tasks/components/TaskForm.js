function TaskForm() {
    function handleChange(event){

    }
    function handleSubmit(){

    }
  return (
    <form className="d-flex justify-content-center align-items-center mb-4" onSubmit={handleSubmit}>
      <div className="form-floating flex-fill">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Task Name"
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

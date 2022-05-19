function Composer() {
  return (
    <form className="card w-50 mx-auto align-middle p-lg-5">
      <div className="display-1 text-center pb-5">Write a new post</div>
      <div className="form-floating w-50">
        <input type="text" className="form-control" placeholder="Title" />
        <label>Title</label>
      </div>
      <div className="form-floating w-50 my-4">
        <input type="text" className="form-control" placeholder="Author" />
        <label>Author</label>
      </div>
      <div className="mb-3">
        <label className="form-label">Example textarea</label>
        <textarea className="form-control" rows="10"></textarea>
      </div>
      <button type="submit" className="btn btn-lg btn-primary">
        Submit
      </button>
    </form>
  );
}
export default Composer;

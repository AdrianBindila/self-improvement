import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPost } from "../../../../api/blog";

function Composer() {
  const navigator = useNavigate();
  const [post, setPost] = useState({
    title: "",
    author: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    // const user = JSON.parse(localStorage.getItem("user"));

    sendPost(post).then(navigator("/blog"));
    setPost({
      title: "",
      author: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <form
      className="card w-50 mx-auto align-middle p-lg-5"
      onSubmit={handleSubmit}
    >
      <div className="display-1 text-center pb-5">Write a new post</div>
      <div className="form-floating w-50">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          name="title"
          value={post.title}
          onChange={handleChange}
        />
        <label>Title</label>
      </div>
      <div className="form-floating w-50 my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Author"
          name="author"
          value={post.author}
          onChange={handleChange}
        />
        <label>Author</label>
      </div>
      <div className="mb-3">
        <label className="form-label">Example textarea</label>
        <textarea
          className="form-control"
          rows="10"
          name="content"
          value={post.content}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-lg btn-primary">
        Submit
      </button>
    </form>
  );
}
export default Composer;

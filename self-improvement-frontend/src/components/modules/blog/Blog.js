import { useNavigate } from "react-router-dom";
import Post from "./components/Post";

function Blog() {
  const posts = [
    {
      title: "Hello",
      author: "funny clown",
      content: "This is a test to see how I can better display this data",
    },
    {
      title: "Hello 2",
      author: "funny clown",
      content:
        "This is a test to see how I can better display this data This is a test to see how I can better display this data This is a test to see how I can better display this data This is a test to see how I can better display this data This is a test to see how I can better display this data This is a test to see how I can better display this data",
    },
  ];
  const isBlogger = true;
  const navigator = useNavigate();
  return (
    <>
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <p class="navbar-brand">DAILY BLOG</p>
          </div>
          {isBlogger && (
            <button
              className="btn btn-lg btn-warning"
              onClick={() => navigator("/blog/compose")}
            >
              Compose
            </button>
          )}
        </div>
      </nav>

      <div class="container">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </>
  );
}
export default Blog;

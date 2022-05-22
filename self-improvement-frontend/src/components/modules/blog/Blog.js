import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Post from "./components/Post";
import { getBlogs } from "../../../api/blog";

function Blog() {
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("blogPosts")) || []
  );
  useEffect(() => {
    getBlogs();
    setPosts(JSON.parse(localStorage.getItem("blogPosts")) || []);
  }, []);
  const user = JSON.parse(localStorage.getItem("user"));
  const isBlogger = user.role === "BLOGGER";
  const navigator = useNavigate();
  return (
    <>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <p className="navbar-brand">DAILY BLOG</p>
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

      <div className="container">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </>
  );
}
export default Blog;

import { useEffect, useState } from "react";
import { getBlogs } from "../../../../api/blog";
import Post from "../../blog/components/Post";
function BlogCard() {
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("blogPosts")) || []
  );
  useEffect(() => console.log("Hell"), []);
  // useEffect(() => {
  //   getBlogs();

  //   setPosts(JSON.parse(localStorage.getItem("blogPosts")) || []);
  // }, []);
  
  return (
    <div className="card col-6">
      <div className="card-title">DAILY BLOG</div>
      <div className="card-body">
        <Post post={posts[0]} />
      </div>
    </div>
  );
}
export default BlogCard;

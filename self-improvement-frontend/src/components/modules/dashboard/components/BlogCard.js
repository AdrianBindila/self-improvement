import Post from "../../blog/components/Post";
function BlogCard() {
  const posts = [
    {
      id:1,
      title: "Hello",
      author: "funny clown",
      content: "This is a test to see how I can better display this data",
    },
    {
      id:2,
      title: "Hello 2",
      author: "funny clown",
      content:
        "This is a test to see how I can better display this data This is a test to see how I can better display this data This is a test to see how I can better display this data This is a test to see how I can better display this data This is a test to see how I can better display this data This is a test to see how I can better display this data",
    },
  ];
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

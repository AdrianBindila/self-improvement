import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api";

async function sendPost(post) {
  const user = JSON.parse(localStorage.getItem("user"));
  await axios
    .post("/blog/create-blog-post", post, { params: { id: user.id } })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

async function getBlogs() {
  await axios
    .get("/blog/get-blog-posts")
    .then((res) => {
      localStorage.setItem("blogPosts", JSON.stringify(res.data));
    })
    .catch((err) => console.log(err));
}
async function getBlog(id) {
  await axios
    .get("/blog/get-blog-post", { params: { id: id } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
}
export { sendPost, getBlogs, getBlog };

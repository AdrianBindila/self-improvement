import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api";
async function deleteUser(id) {
  await axios
    .post(`/admin/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
async function getUsers() {
  await axios
    .get("/admin")
    .then((res) => {
      localStorage.setItem("userList", JSON.stringify(res.data));
    })
    .catch((err) => console.log(err));
}
export { deleteUser, getUsers };

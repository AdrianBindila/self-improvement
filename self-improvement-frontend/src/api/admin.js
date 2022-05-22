import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api";
async function deleteUser(id) {
  await axios
    .post(`/admin/users/${id}`)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
async function setRole(id, role) {
  await axios
    .post(`/admin/users/${id}/role`, null,{params:{role:role}})
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
async function getUsers() {
  await axios
    .get("/admin/users")
    .then((res) => {
      localStorage.setItem("userList", JSON.stringify(res.data));
    })
    .catch((err) => console.log(err));
}
export { deleteUser, getUsers, setRole };

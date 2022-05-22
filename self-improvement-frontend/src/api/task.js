import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api";

async function getTasks(id){
    await axios
        .get(`/tasks`, { params: { id: id } })
        .then((res) => {
        localStorage.setItem("tasks", JSON.stringify(res.data));
        })
        .catch((err) => console.log(err));
}
async function sendTask(task){
    const user = JSON.parse(localStorage.getItem("user"));
    await axios
    .post(`/tasks`, task, { params: { id: user.id } })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
}
async function updateTask(id){
    await axios
    .post(`/tasks/${id}`)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
}
async function removeTask(id){
    await axios
    .post(`/tasks/${id}/remove`)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
}
export { getTasks, sendTask, updateTask,removeTask };
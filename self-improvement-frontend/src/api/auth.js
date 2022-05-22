import axios from "axios";
import { getUsers } from "./admin";

axios.defaults.baseURL = "http://localhost:8080/api";

async function sendLogin(login) {
  await axios
    .get("/auth/login", {
      params: login,
    })
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data));
      res.data.role === "ADMIN" && getUsers();
      return res.data.role === "ADMIN";
    })
    .catch((err) => console.log(err));
}

async function sendRegistration(registration) {
  // console.log(registration);
  await axios
    .post("/auth/register", registration)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

export { sendLogin, sendRegistration };

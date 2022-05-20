import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api";

async function sendLogin(login) {
  await axios
    .get("/login", {
      params: login,
    })
    .then((res) => {
        //TODO fix
    })
    .catch((err) => console.log(err));
}

function sendRegistration(registration) {
  axios
    .post("/register", registration)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

export { sendLogin, sendRegistration };

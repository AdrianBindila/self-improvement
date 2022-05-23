import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api";

async function setHydration(hydration) {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(hydration);
  await axios
    .post(`/auth/${user.id}`,null, { params: { hydration: hydration } })
    .then((res) => {
      // localStorage.setItem("hydration", JSON.stringify(res.data));
      console.log(res.data);
    })
    .catch((err) => console.log(err));
}
export { setHydration };
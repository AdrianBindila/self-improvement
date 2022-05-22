import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/api";

async function getHydration(id) {
  await axios
    .get(`/hydration`, { params: { id: id } })
    .then((res) => {
      localStorage.setItem("hydration", JSON.stringify(res.data));
    })
    .catch((err) => console.log(err));
}
export { getHydration };
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendLogin } from "../../../api/auth";
import { getBlogs } from "../../../api/blog";
import { getHydration } from "../../../api/hydration";
import { getTasks } from "../../../api/task";

function Login() {
  
  const navigator = useNavigate();

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setLogin((prevLogin) => {
      return {
        ...prevLogin,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    sendLogin(login).then((isAdmin) => {
      let user = JSON.parse(localStorage.getItem("user"));
      getBlogs().then(isAdmin ? navigator("/admin") : navigator("/dashboard"));
      getTasks(user.id);
    });
    setLogin({
      username: "",
      password: "",
    });
    event.preventDefault();
  }

  return (
    <div className="form-signin text-center">
      <form onSubmit={handleSubmit}>
        <img
          className="mb-5"
          style={{ marginTop: "70%" }}
          src="assets/login-register-tree.png"
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Username"
            value={login.username}
            onChange={handleChange}
          />
          <label>Username</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={login.password}
            onChange={handleChange}
          />
          <label>Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <button
          className="w-100 btn btn-lg btn-primary my-2"
          onClick={() => navigator("/")}
        >
          Back
        </button>
        <p className="mt-5 mb-3 text-muted">© Adrian Bîndilă 2022</p>
      </form>
    </div>
  );
}

export default Login;

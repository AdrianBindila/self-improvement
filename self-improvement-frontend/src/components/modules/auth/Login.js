import { useNavigate } from "react-router-dom";

function Login() {
  const navigator = useNavigate();
  return (
    <div className="form-signin text-center">
      <form>
        <img
          className="mb-4"
          src="login-register-tree.png"
          alt=""
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label>Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label>Password</label>
        </div>

        <button
          className="w-100 btn btn-lg btn-primary"
          type="submit"
          onClick={() => {
            navigator("/dashboard");
          }}
        >
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

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendRegistration } from "../../../api/auth";

function Register() {
  const navigator = useNavigate();
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    username: "",
    password: "",
    confirmedPassword: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setRegister((prevRegister) => {
      return {
        ...prevRegister,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    sendRegistration(register);
    setRegister({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
      username: "",
      password: "",
      confirmedPassword: "",
    });
    navigator("/login");
    event.preventDefault();
  }

  return (
    <div className="form-signin text-center">
      <form onSubmit={handleSubmit}>
        <img
          className="mb-5"
          style={{ marginTop: "30%" }}
          src="assets/login-register-tree.png"
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Please register</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="First Name"
            value={register.firstName}
            onChange={handleChange}
          />
          <label>First Name</label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Last Name"
            value={register.lastName}
            onChange={handleChange}
          />
          <label>Last Name</label>
        </div>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            name="address"
            placeholder="Address"
            value={register.address}
            onChange={handleChange}
          />
          <label>Address</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            name="phone"
            placeholder="Phone"
            value={register.phone}
            onChange={handleChange}
          />
          <label>Phone</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Username"
            value={register.username}
            onChange={handleChange}
          />
          <label>Username</label>
        </div>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="name@example.com"
            value={register.email}
            onChange={handleChange}
          />
          <label>Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={register.password}
            onChange={handleChange}
          />
          <label>Password</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            name="confirmedPassword"
            placeholder="Confirm Password"
            value={register.confirmedPassword}
            onChange={handleChange}
          />
          <label>Confirm Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Register
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
export default Register;

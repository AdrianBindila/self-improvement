import { useNavigate } from "react-router-dom";
import { getUsers } from "../../../../api/admin";

function Sidebar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigator = useNavigate();
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 h-100"
      style={{ width: "10%", backgroundColor: "#F3F0D7" }}
    >
      <a
        href="/dashboard"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto  text-decoration-none"
        style={{ color: "black" }}
      >
        <span className="fs-3 px-3">Mejora</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <a href="/blog" className="nav-link fs-4" style={{ color: "black" }}>
            Blog
          </a>
        </li>
        <li>
          <a href="/tasks" className="nav-link fs-4" style={{ color: "black" }}>
            Tasks
          </a>
        </li>
        <li>
          <a
            href="/hydration"
            className="nav-link fs-4"
            style={{ color: "black" }}
          >
            Hydration
          </a>
        </li>
        <li>
          <a
            href="/profile"
            className="nav-link fs-4"
            style={{ color: "black" }}
          >
            Profile
          </a>
        </li>
        {user.role === "ADMIN" && (
          <li>
            <button
              onClick={() => {
                getUsers().then(navigator("/admin"));
              }}
              className="nav-link fs-4"
              style={{ color: "black" }}
            >
              Admin
            </button>
          </li>
        )}
        <li>
          <button
            onClick={() => {
              localStorage.clear();
              navigator("/");
            }}
            className="nav-link fs-4"
            style={{ color: "black" }}
          >
            Logout
          </button>
        </li>
      </ul>
      <hr />
    </div>
  );
}
export default Sidebar;

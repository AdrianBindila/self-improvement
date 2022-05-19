function Sidebar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100"
      style={{ width: "10%" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span className="fs-4">Mejora</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <a href="#" className="nav-link text-white">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/blog" className="nav-link text-white">
            Blog
          </a>
        </li>
        <li>
          <a href="/tasks" className="nav-link text-white">
            Tasks
          </a>
        </li>
        <li>
          <a href="/hydration" className="nav-link text-white">
            Hydration
          </a>
        </li>
        <li>
          <a href="/profile" className="nav-link text-white">
            Profile
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
}
export default Sidebar;
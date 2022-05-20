import { useNavigate } from "react-router-dom";

function LandingPage() {
  const nav = useNavigate();
  return (
    <div className="row flex-lg-row-reverse justify-content-center my-auto align-items-center g-5 py-5 px-lg-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img
          src="assets/forest.webp"
          className="d-block mx-lg-auto img-fluid"
          alt="Bootstrap Themes"
          width="100%"
          loading="lazy"
        />
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">Welcome to Mejora</h1>
          <ul className="lead">
            <li>a self improvement platform designed for your growth</li>
            <li>a refuge from the tiresome challenges of day-to-day life</li>
            <li>a safe space in a frightening world</li>
          </ul>
        
        <div
          className="d-grid gap-5 d-md-flex justify-content-md-start"
          style={{ paddingLeft: "8%" }}
        >
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 me-md-2"
            onClick={() => {
              nav("/login");
            }}
          >
            Sign in
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 me-md-2"
            onClick={() => {
              nav("/register");
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

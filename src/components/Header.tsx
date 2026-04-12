export default function Header() {
  return (
    <header
      className="sticky-top shadow-sm"
      style={{
        background: "linear-gradient(to right, #F7DF1E, #f0bc11ff)",
        color: "#222",
      }}
    >
      <div className="d-flex align-items-center p-3">
        {/* Toggle Button for Offcanvas on Small Screens */}
        <button
          className="btn btn-dark d-lg-none me-3 shadow-sm"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
        >
          <span
            className="navbar-toggler-icon text-white fs-6 d-inline-block"
            style={{ lineHeight: "1" }}
          >
          ☰
          </span>
        </button>

        <img
          src={`${import.meta.env.BASE_URL}jsicon.svg`}
          alt="JS Logo"
          width="40"
          height="40"
          className="me-3 rounded shadow-sm border border-light"
        />
        <h1
          className="h2 mb-0 flex-grow-1 text-dark"
         style={{ fontWeight: "800" }}
        >
          A Bit of Everything in JavaScript
        </h1>
      </div>
    </header>
  );
}

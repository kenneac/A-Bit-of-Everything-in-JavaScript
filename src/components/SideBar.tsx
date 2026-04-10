import { NavLink } from "react-router-dom";

export default function SideBar() {
  const linkStyles = ({ isActive }: { isActive: boolean }) =>
    `nav-link text-dark fs-5 py-3 border-bottom hover-bg-light ${isActive ? "bg-warning fw-bold" : ""}`;

  return (
    <>
      <div
        className="offcanvas-lg offcanvas-start bg-light h-100 border-end flex-shrink-0"
        tabIndex={-1}
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
        style={{ width: "280px" }}
      >
        <div className="offcanvas-header bg-dark text-warning border-bottom d-lg-none">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            Content
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column p-0 pt-3">
          <ul className="nav nav-pills flex-column mb-auto w-100 px-3">
            <li className="nav-item mb-2">
              <NavLink to="/history" className={linkStyles}>
                JS History Bit
              </NavLink>
            </li>
            <li className="nav-item mb-2">
              <NavLink 
                to="/syntax" 
                className={linkStyles}
              >
                JS Syntax
              </NavLink>
            </li>
            <li className="nav-item mb-2">
              <NavLink 
                to="/types" 
                className={linkStyles}
              >
                JS Types
              </NavLink>
            </li>
            <li className="nav-item mb-2">
              <NavLink 
                to="/operators" 
                className={linkStyles}
              >
                JS Operators
              </NavLink>
            </li>
            <li className="nav-item mb-2">
              <NavLink 
                to="/conditions" 
                className={linkStyles}
              >
                JS Conditions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/loops" 
                className={linkStyles}
              >
                JS Loops
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

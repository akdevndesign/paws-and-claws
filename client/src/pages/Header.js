import { useState } from "react";
import "../styles/styles.css";
import Navigation from "./Navigation";

export default function Header() {
  const [navPage, setPage] = useState("home");
  const handleClick = (event) => {
    setPage(event.target.getAttribute("id"));
  };
  return (
    <>
      <nav className="main navbar navbar-expand-lg col-6">
        <div className="container-fluid">
          <div className="col-md-6" id="home" onClick={handleClick}>
            PnC
          </div>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  id="about"
                  onClick={handleClick}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#showcase">
                  Our Pets
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  id="contact"
                  onClick={handleClick}
                >
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  id="account"
                  onClick={handleClick}
                >
                  Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Navigation onPage={navPage} /> */}
    </>
  );
}

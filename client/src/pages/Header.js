import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/styles.css";

export default function Header() {
  const [onHome, setOnHome] = useState(true);
  return (
    <section className="main-header">
      <nav className="main navbar navbar-expand-lg col-6">
        <div className="container-fluid">
          <Link className="col-md-4" to={"/"} onClick={() => setOnHome(true)}>
            PnC
          </Link>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/about"}
                  onClick={() => setOnHome(false)}
                >
                  About
                </Link>
              </li>
              {onHome ? (
                <li className="nav-item">
                  <a className="nav-link" href="#showcase">
                    Our Pets
                  </a>
                </li>
              ) : (
                <></>
              )}
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/contact"}
                  onClick={() => setOnHome(false)}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/account"}
                  onClick={() => setOnHome(false)}
                >
                  Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

import { Link } from "react-router-dom";
import { useState } from "react";
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import "../styles/styles.css";

export default function Header() {
  const [onHome, setOnHome] = useState(true);
  return (
    <section className="main-header">
      <nav className="main navbar navbar-expand-lg col-12">
        <div className="container-fluid">
          <Link className="col-3" to={"/"} onClick={() => setOnHome(true)}>
            Paws and Claws
          </Link>
          <div className="col-3">
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
            </ul>
          </div>
          <div className="col-md-2 col-sm-3">
            {/* {onHome ? (
              <InputGroup className="input-group-search">
              <FormControl type="text" placeholder="Search..." />
              <InputGroup.Text style={{ width: "50px" }}>
                <span className="bi bi-search search-icon"></span>
              </InputGroup.Text>
            </InputGroup>
            ) : (
              <></>
            )            } */}
          </div>
          <div className="col-1">
            <Button id="donate" type="submit" className="text-right">
              Donate
            </Button>
          </div>
        </div>
      </nav>
    </section>
  );
}

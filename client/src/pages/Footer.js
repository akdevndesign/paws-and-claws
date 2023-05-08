import "../styles/styles.css";

export default function Footer() {
  return (
    <footer className="bg-light pt-4">
      <div className="container pt-4">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mt-4">
            <h4>Join Our Newsletter</h4>
            <form>
              <div className="form-row">
                <div className="col-6 mx-auto">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="col-auto mt-4">
                  <button type="submit" className="btn btn-primary mb-2">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row justify-content-center pb-3 text-center">
          <div className="col-md-4">
            <h5>Paws &amp; Claws</h5>
            <p>&copy; 2023 Paws &amp; Claws</p>
            <a href="#">
              <i className="fab fa-github fa-lg"></i>
            </a>
          </div>
          <div className="col-md-4">
            <h5>About</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <a
              href="#"
              className="btn btn-outline-dark btn-sm float-right mb-3"
            >
              <i className="bi bi-caret-up-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

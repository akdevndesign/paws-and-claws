import "../styles/styles.css";

export default function Footer() {
  return (
    <footer className="pt-4">
      <div className="container pt-4">
        <div className="row justify-content-center pb-3 text-center">
          <div className="col-md-4">
            <h5>Paws &amp; Claws</h5>
            <p>&copy; 2023 Paws &amp; Claws</p>
            <a href="#">
              <i className="fab fa-github fa-lg"></i>
            </a>
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

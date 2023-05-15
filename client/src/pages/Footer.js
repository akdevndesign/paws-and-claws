import "../styles/styles.css";

export default function Footer() {
  return (
    <footer className="pt-4">
      <div className="pt-4">
        <div className="row col-10 justify-content-center pb-3 text-center mx-auto">
          <div className="col-md-6">
            <img src="https://res.cloudinary.com/dusaigbyn/image/upload/c_thumb,w_200,g_face/v1683762073/paws_n_claws_logo_font_only_3_gcvqwf.png" alt="paws and claws logo"></img>
            <p>&copy; 2023</p>
          </div>
          {/* <div className="col-md-4">
            <a
              href="#"
              className="btn btn-outline-dark btn-sm float-right mb-3"
            >
              <i className="bi bi-caret-up-fill"></i>
            </a>
          </div> */}
        </div>
        <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
          <a href="#" className="btn btn-outline-dark btn-sm mb-3">
            <i className="bi bi-caret-up-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

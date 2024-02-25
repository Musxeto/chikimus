import React from "react";

function Footer() {
  return (
    <footer className="footer text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-left">
            <div className="footer-links">
              <a href="https://github.com/musxeto/chikimus.git" target="_blank">
                <img
                  src="/github.png"
                  alt="GitHub Icon"
                  className="img-fluid"
                />
              </a>
              <a
                href="https://github.com/musxeto/chikimus.git"
                target="_blank"
                className="btn btn-outline-light btn-sm ml-2"
                style={{ marginRight: "5px" }}
              >
                Contribute
              </a>
              <a
                href="https://linkedin.com/in/mustafa-gm"
                target="_blank"
                className="btn btn-outline-light btn-sm ml-2"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <div className="footer-info">
              <p>&copy; 2024 Chikimus</p>
              <p>Designed by Musxeto</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

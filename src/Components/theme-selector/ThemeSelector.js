import React from "react";

const ThemeSelector = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="theme-selector">
            <p className="label animated-text">S w i t c h T h e m e</p>
            <div className="anime-logos">
              <a href="/naruto">
                <img
                  className="img-fluid"
                  src="/naruto-logo.png"
                  alt="Naruto Logo"
                />
              </a>
              <a href="/jjk">
                <img
                  className="img-fluid"
                  style={{ marginTop: "13px" }}
                  src="/jjk-logo.png"
                  alt="JJK Logo"
                />
              </a>
              <a href="/bleach">
                <img
                  className="img-fluid"
                  src="/bleach-logo.png"
                  alt="Bleach Logo"
                  style={{ marginTop: "-10px" }}
                />
              </a>
              <a href="/demonslayer">
                <img
                  style={{ marginTop: "-5px" }}
                  className="img-fluid"
                  src="/demonslayer-logo.png"
                  alt="Demon Slayer Logo"
                />
              </a>
              <a href="/evangelion">
                <img
                  className="img-fluid"
                  src="/evangelion-logo.png"
                  alt="Evangelion Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;

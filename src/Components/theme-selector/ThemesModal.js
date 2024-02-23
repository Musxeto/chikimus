import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import "./ThemesModal.css";

function ThemesModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className="button-gear" onClick={openModal}>
        <FontAwesomeIcon icon={faCog} className="gear-icon" />
      </button>

      {isModalOpen && (
        <div className="Modal">
          <div className="container">
            <div>
              <div>
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
          <button className="btn btn-secondary" onClick={closeModal}>
            Close Modal
          </button>
        </div>
      )}
    </div>
  );
}

export default ThemesModal;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import "./ThemesModal.css";

function ThemesModal({ onThemeChange }) {
  const [theme, setTheme] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (theme) {
      closeModal();
      onThemeChange(theme);
    }
  }, [theme, onThemeChange]);

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
                    <button
                      className="button-gear"
                      onClick={() => {
                        setTheme("naruto");
                        closeModal();
                      }}
                    >
                      <img
                        className="img-fluid"
                        src="/naruto-logo.png"
                        alt="Naruto Logo"
                      />
                    </button>
                    <button
                      className="button-gear"
                      onClick={() => {
                        setTheme("jjk");
                        closeModal();
                      }}
                    >
                      <img
                        className="img-fluid"
                        style={{ marginTop: "13px" }}
                        src="/jjk-logo.png"
                        alt="JJK Logo"
                      />
                    </button>
                    <button
                      className="button-gear"
                      onClick={() => {
                        setTheme("bleach");
                        closeModal();
                      }}
                    >
                      <img
                        className="img-fluid"
                        src="/bleach-logo.png"
                        alt="Bleach Logo"
                        style={{ marginTop: "-10px" }}
                      />
                    </button>
                    <button
                      className="button-gear"
                      onClick={() => {
                        setTheme("demonslayer");
                        closeModal();
                      }}
                    >
                      <img
                        style={{ marginTop: "-5px" }}
                        className="img-fluid"
                        src="/demonslayer-logo.png"
                        alt="Demon Slayer Logo"
                      />
                    </button>
                    <button
                      className="button-gear"
                      onClick={() => {
                        setTheme("evangelion");
                        closeModal();
                      }}
                    >
                      <img
                        className="img-fluid"
                        src="/evangelion-logo.png"
                        alt="Evangelion Logo"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1>{theme}</h1>
          <button className="btn btn-secondary" onClick={closeModal}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default ThemesModal;

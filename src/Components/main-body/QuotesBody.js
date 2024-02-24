import React from "react";
import QuoteBoard from "../quotes-generator/QuoteBoard";

function QuotesBody({ mode }) {
  return (
    <div className="quotes-body-container">
      <div className="left-column"></div>
      <div className="center-column">
        <QuoteBoard />
      </div>
      <div className="right-column">
        <img
          src="/character-op-right.png"
          alt="RIGHT CHARACTER"
          className="img-fluid"
          style={{ height: "50%" }}
        />
      </div>
    </div>
  );
}

export default QuotesBody;

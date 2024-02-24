import React from "react";
import QuoteBoard from "../quotes-generator/QuoteBoard";

function QuotesBody() {
  return (
    <div className="quotes-body-container">
      <div className="left-column"></div>
      <div className="center-column">
        <QuoteBoard />
      </div>
      <div className="right-column"></div>
    </div>
  );
}

export default QuotesBody;

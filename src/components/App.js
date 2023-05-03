import React from "react";
import Tooltip from "./tooltip";
import '../css/App.css';


function App() {
  return (
    <>
      <div className="styl-50 tc styl-5">
        <h1>Welcome to ToolTip Components</h1>
      </div>
      <div className="styl-50 tc">
        <div className="styl-3">
          <Tooltip position="top" />
        </div>

        <div className="styl-3">
          <Tooltip position="left" />
        </div>

        <div className="styl-3">
          <Tooltip position="right" />
        </div>

        <div className="styl-3">
          <Tooltip position="bottom" />
        </div>
      </div>
    </>
  );
}

export default App;

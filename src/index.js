import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Header from "./components/header.jsx";
import Footer from "./components/footer";
import Main from "./components/main";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("react-app"));

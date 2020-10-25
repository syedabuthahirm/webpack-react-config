import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/header.jsx";
import Footer from "./components/footer";
import Main from "./components/main";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Footer />
      <Main />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("react-app"));

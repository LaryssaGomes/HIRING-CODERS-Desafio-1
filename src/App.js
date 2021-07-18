import React from "react";
import "./global.css";
import Background from "./components/Background";
import Main from "./components/Main";
import Header from "./components/Header";
import CardProduction from "./components/Cards/Products";
import Email from "./components/Email";
function App() {
  return (
    <div className="App">
      <Background
        headerElement={<Header />}
        mainElement={<Main />}
        cardElement={<CardProduction />}
        emailElement={<Email />}
      ></Background>
    </div>
  );
}

export default App;

import React from "react";

// Header
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

// CSS
import "./App.css";

function App() {
  return (
    <div className="container">
      <div>
        <Navbar />
      </div>
      <div>
        <ItemListContainer greeting={"Welcome to my WoodShop"} />
        <div className="cont-button">
          <ItemCount />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;

import React from "react";

// Header
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="container-header">
      <Navbar />
      <ItemListContainer greeting={'Welcome to my WoodShop'}/>
    </div>
  );
}

export default App;

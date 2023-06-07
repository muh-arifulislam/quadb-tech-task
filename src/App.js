import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./scenes/Home";
import Summary from "./scenes/Summary";
import { useState } from "react";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/movie" element={<Home></Home>}></Route>
        <Route path="/movie/:id" element={<Summary></Summary>}></Route>
      </Routes>
    </div>
  );
}

export default App;

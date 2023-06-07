import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./scenes/Home";
import Summary from "./scenes/Summary";
import { useState } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
function App() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <div className="App">
      <Header cartOpen={cartOpen} setCartOpen={setCartOpen}></Header>
      <Routes>
        <Route path="/" element={<Navigate to="/movie"></Navigate>}></Route>
        <Route path="/movie" element={<Home></Home>}></Route>
        <Route path="/movie/:id" element={<Summary></Summary>}></Route>
      </Routes>
      {/* cart offcanvas  */}
      <Cart cartOpen={cartOpen} setCartOpen={setCartOpen}></Cart>
    </div>
  );
}

export default App;

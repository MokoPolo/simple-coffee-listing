// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Coffee from "./pages/coffee-listing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/Home">Home </Link>
          <Link to="/">Coffee Listing </Link>
        </div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Coffee />} />
          {/* <Route path="/products/*" element={<ViewProduct />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Header from "./component/header";
import Home from "./component/Home";
import Details from "./component/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

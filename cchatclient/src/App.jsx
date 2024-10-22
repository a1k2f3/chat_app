import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./components/LoginPages/Page1";
import Page2 from "./components/LoginPages/Page2";
import Page3 from "./components/LoginPages/Page3";
import Page4 from "./components/LoginPages/Page4";
import Login from "./components/LoginPages/Login";
import Home from "./components/FrontPages/Home";
import "./App.css";
import ConfirmPass from "./components/LoginPages/ConfirmPass";
function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/confirm" element={<ConfirmPass />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

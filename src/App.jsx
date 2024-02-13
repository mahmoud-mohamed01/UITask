import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alerts from "./Pages/Alerts/Alerts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Alerts></Alerts>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

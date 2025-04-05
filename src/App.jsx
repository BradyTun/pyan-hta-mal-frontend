import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/layout/Layout";
import Zones from "./pages/Zones";
import Zone from "./pages/Zone";
import Needs from "./pages/Needs";
import Need from "./pages/Need";
import Risks from "./pages/Risks";
import Risk from "./pages/Risk";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <ToastContainer />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/zones" element={<Zones />} />
          <Route path="/zones/:id" element={<Zone />} />
          <Route path="/needs" element={<Needs />} />
          <Route path="/needs/:id" element={<Need />} />
          <Route path="/risks" element={<Risks />} />
          <Route path="/risks/:id" element={<Risk />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

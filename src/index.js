import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import FlavourPage from "./pages/FlavourPage";
import FlavourPage2 from "./pages/FlavourPage2";
import ContactUsPage from "./pages/ContactUsPage"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="/flavour" element={<FlavourPage />} />
          <Route path="/flavour2" element={<FlavourPage2 />} />
          <Route path="/contactus" element={<ContactUsPage />} /> 
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);

reportWebVitals();

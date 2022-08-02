import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../components/About";
import { Blog } from "../components/Blog";
import CategoriasApp from "../components/CategoriasApp";
import Nabvar from "../components/Nabvar";

export const App = () => {
  return (
    <Router>
      <Nabvar />
      <Routes>
        <Route exact path="/api" element={ <CategoriasApp/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/blog" element={<Blog/>} />
      </Routes>
    </Router>
  );
};

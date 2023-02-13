import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Error404 from "./elements/Error404";
import Home from "./elements/Home";
import Lista from "./elements/Lista";

const App = () => {
  return (
    <div className="app">
      <main>
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/lista" element={<Lista />} />
            {/*  <Route exact path="/work" element={<Work />} />
            <Route exact path="/contacto" element={<Contacto />} /> */}

            <Route path="*" element={<Error404 />} />
          </Routes>
        </HashRouter>
      </main>
    </div>
  );
};

export default App;

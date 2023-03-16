import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import HomePage2 from "./Components/HomePage2";
import MenSection from "./Components/MenSection";
import Section from "./Components/Section";

function App() {
  return (
    <div className="App">
      {/* <Homepage /> */}

      <BrowserRouter>
        <Routes>
          {/* <Route path="/homepage" element={<Homepage />} /> */}
          <Route path="/" element={<HomePage2 />} />
          <Route path="/section" element={<Section />} />
          <Route path="section/MenSection" element={<MenSection />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

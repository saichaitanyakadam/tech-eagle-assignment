import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RaceTrack from "./pages/RaceTrack";
import { AppContext } from "./context/AppContext";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  return (
    <AppContext.Provider value={{ data, setData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/race-track" exact element={<RaceTrack />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;

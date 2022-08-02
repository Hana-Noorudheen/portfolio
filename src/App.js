import React, { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Data from "./Components/Data";

export const UserContext = createContext();

function App() {
  const [state, setState] = useState(0);

  return (
    <UserContext.Provider value={{ state, setState }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Data />} />
          </Routes>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;

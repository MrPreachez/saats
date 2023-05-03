
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRef } from "react";
import React from "react";


function App() {
  const projectsSectionRef = useRef(null);
  return (
    <div className="App">
      <BrowserRouter>
        <Header projectsSectionRef={projectsSectionRef} />
        <Routes>
          <Route
            path="/"
            element={<HomePage ref={projectsSectionRef} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


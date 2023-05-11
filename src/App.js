import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import MembershipPage from "./pages/MembershipPage/MembershipPage";
import ContactPage from "./pages/ContactPage/ContactPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRef } from "react";
import React from "react";

function App() {
  const aboutSectionRef = useRef(null);
  const newsSectionRef = useRef(null);
  
  const headerMenuRef = useRef(null);

  // const handleScrollTo = (ref) => {
  //   if (ref.current) {
  //     ref.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          aboutSectionRef={aboutSectionRef}
          newsSectionRef={newsSectionRef}
       
        />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                aboutSectionRef={aboutSectionRef}
                newsSectionRef={newsSectionRef}
                headerMenuRef={headerMenuRef}
               
              />
            }
          />
          <Route path="/membership" element={<MembershipPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
        <Footer
          aboutSectionRef={aboutSectionRef}
          newsSectionRef={newsSectionRef}
        
        />
      </BrowserRouter>
    </div>
  );
}

export default App;

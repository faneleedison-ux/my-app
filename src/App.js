import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./Components/Nav/Nav";


//importing nav bar pages
import Home from "./Components/Home/Home";
import { About } from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

//importing card pages
import Theory from "./Components/Theory/Theory";
import Design  from "./Components/Design/Design";
import Art from "./Components/Art/Soon";
import Face from "./Components/Art/Art";

//importing the slider
import ImagesSlider from "./Components/Design/ImagesSlider";




function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Face/>
      
      <Router>
        <Routes>
          <Route exact path="/ART-CONNECT-REACT-WEB-APP" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/design" element={<Design />} />
          <Route path="/theory" element={<Theory />} />
          <Route path="/art" element={<Art />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

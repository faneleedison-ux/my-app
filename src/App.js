import React from "react";
import { Link } from 'react-router-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./Components/Nav/Nav";

//importing nav bar pages
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

//importing card pages
import Theory from "./Components/Theory/Theory";
import Design from "./Components/Design/Design";
import Art from "./Components/Art/Soon";


//importing the slider
import SubmitBtn from "./Components/Contact/Submit";

//importing blogpost example test

import Essay from "./Components/Blog/Essay";
import Research from "./Components/Blog/Research";
import Devblogs from "./Components/Blog/Devblogs";

import Wireframes from "./Components/Blog/Wireframes";
import Guide from "./Components/Blog/Guide";
import Ration from "./Components/Blog/Rationale";

//importing footer
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      

      <Router>
        <Routes>
          <Route exact path="/my-app" element={<Home />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/design" element={<Design />} />
          <Route path="/theory" element={<Theory />} />
          <Route path="/art" element={<Art />} />
          
          <Route path="/submit" element={<SubmitBtn />} />

          <Route path="/devblogs" element={<Devblogs />} />
          <Route path="/essay" element={<Essay />} />
          <Route path="/research" element={<Research />} />

          <Route path="/wireframes" element={<Wireframes />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/rationale" element={<Ration />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;

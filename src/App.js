import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


import About from "./Components/About/About";
import Theory from "./Components/Theory/Theory";
import Design from "./Components/Design/Design";
import Essay from "./Components/Blog/Essay";
import Research from "./Components/Blog/Research";
import Devblogs from "./Components/Blog/Devblogs";
import Wireframes from "./Components/Blog/Wireframes";
import Guide from "./Components/Blog/Guide";
import Ration from "./Components/Blog/Rationale";
import Footer from "./Components/Footer/Footer";
import SwipeCard from "./Components/Art/SwipeCard";
import ProvinceStats from "./Components/Art/ProvinceStats";
import ChatbotApp from "./Components/Art/Chatbot";
import Eyes from "./Components/Art/Art";
import Sand from "./Components/Home/SandHourglass";
import RoundedButtons from "./Components/Buttons/RoundedButtons";
import Words from "./Components/Home/Words";

import BackgroundVideo from './BackgroundVideo';
import './BackgroundVideo.css';
function App() {
  return (
    
      <div className="App">
        <BackgroundVideo />
        
        <Router>
          <Routes>
            <Route exact path="/my-app" element={<RoundedButtons />} />
            <Route exact path="/" element={<RoundedButtons/>} />
            <Route exact path="/about" element={<About />} />

            <Route path="/design" element={<Design />} />
            <Route path="/theory" element={<Theory />} />
            <Route path="/art" element={<Eyes />} />

            <Route path="/chat" element={<ChatbotApp />} />
            <Route path="/tinder" element={<SwipeCard />} />

            <Route path="/devblogs" element={<Devblogs />} />
            <Route path="/essay" element={<Essay />} />
            <Route path="/research" element={<Research />} />

            <Route path="/wireframes" element={<Wireframes />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/rationale" element={<Ration />} />
          </Routes>
        </Router>
        
      </div>
    
  );
}

export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Education } from "./components/Education";
import { About } from "./components/About";
import { Publications } from "./components/publications";
import { Experience } from "./components/Research_Experience";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Skill } from "./components/Skill";
import { Mooc } from "./components/Mooc";
import { Achievements } from "./components/Achievements";
import { BrowserRouter as Router, Routes, Route, Link ,Navigate} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router basename="/portfolio">
        <NavBar /> {/* Navigation bar imported here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/publication" element={<Publications />} />
          <Route path="/research" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievement" element={<Achievements />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/training" element={<Mooc />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      {/* Other components can be added here, such as About, Education, etc. */}
    </div>
  );
}

export default App;

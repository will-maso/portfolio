import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import GitHub from "./components/GitHub";
import LinkedIn from "./components/LinkedIn";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/GitHub" element={<GitHub />} />
          <Route path="/LinkedIn" element={<LinkedIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

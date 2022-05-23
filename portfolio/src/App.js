import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [darkmode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((currDarkmode) => {
      return !currDarkmode;
    });
  };

  return (
    <BrowserRouter>
      <div className={`App__${darkmode ? 'Light' : 'Dark'}`}>
        <NavBar />
        <button
          onClick={() => toggleTheme()}
          className={`button__${darkmode ? 'Dark' : 'Light'}`}
        >
          {darkmode ? 'Dark' : 'Light'}mode
        </button>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/About' element={<About />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

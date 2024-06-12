import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// 페이지
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';

// 컴포넌트
import Navbar from './components/Navbar';

// CSS
import './css/Main.css';

const Main = () => {
  return (
      <div className="Main">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      </div>
  );
}

export default Main;

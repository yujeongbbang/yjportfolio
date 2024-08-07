import React from 'react';

// 페이지
import Home from './pages/Home';
import Introduce from './pages/Introduce';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Project from './pages/Project';

// 컴포넌트
import Navbar from './components/Navbar';

// CSS
import './css/Main.css';

const Main = () => (
  <div className="Main">
    <Navbar />
    <Home />
    <Introduce />
    <Contact />
    <Skills />
    <Project />
  </div>
)

export default Main;

// src/App.jsx
import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import BasicParticles from './components/BasicParticles.jsx';
import './App.css';

export default function App() {
    return (
        <div className="app-container">
            <BasicParticles />
            <header className="navbar">
                <nav className="nav-links">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/about-me">About Me</NavLink>
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about-me" element={<AboutMe />} />
            </Routes>
        </div>
    );
}

// src/App.jsx
import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PersonalProjects from './pages/PersonalProjects';
import ProfessionalProjects from './pages/ProfessionalProjects';
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
                    <NavLink to="/personal-projects">Personal Projects</NavLink>
                    <NavLink to="/professional-projects">Professional Projects</NavLink>
                    <NavLink to="/about-me">About Me</NavLink>
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/personal-projects" element={<PersonalProjects />} />
                <Route path="/professional-projects" element={<ProfessionalProjects />} />
                <Route path="/about-me" element={<AboutMe />} />
            </Routes>
        </div>
    );
}

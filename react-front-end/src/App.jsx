// src/App.jsx
import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
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
                    <NavLink to="/projects-page">Projects</NavLink>
                    <NavLink to="/about-me">About Me</NavLink>
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects-page" element={<ProjectsPage />} />
                <Route path="/about-me" element={<AboutMe />} />
            </Routes>
        </div>
    );
}

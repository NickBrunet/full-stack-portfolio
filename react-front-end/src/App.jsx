// src/App.jsx
import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
// import other pages as you create them

export default function App() {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                        Home
                    </NavLink>
                    {/* add more NavLinks for other pages */}
                </nav>
            </header>

            {/* Define your route-to-component mapping */}
            <Routes>
                <Route path="/" element={<Home />} />
                {/* add more Route elements for other pages */}
            </Routes>
        </div>
    );
}

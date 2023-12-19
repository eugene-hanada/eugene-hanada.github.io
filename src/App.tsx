import React from 'react';
import './App.css';
import {
	Routes,
    Route
} from "react-router-dom";

import Home from './Home'
import Profile from './Profile';
import Header from './Header';
import Works from './Works';

const App: React.FC = () => {
    return (
        <div className="App">
            <header>
                <Header />
            </header>
            <body >
            <Routes>
                <Route index element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Works" element={<Works />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="*" element={<Home />} />
                </Routes>
            </body>
        </div>
    );
}

export default App;

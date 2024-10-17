import React from 'react';
import Login from './Components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />  {/* Login page route */}
        <Route path="/home" element={<Home />} />  {/* Home page route */}
      </Routes>
    </Router>
  );
}

export default App;

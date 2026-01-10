
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import ProfilePage from './pages/ProfilePage';
import { User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from local storage on mount (Persistence simulation)
  useEffect(() => {
    const savedUser = localStorage.getItem('travelbite_current_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLoginSuccess = (userData: User) => {
    setUser(userData);
    localStorage.setItem('travelbite_current_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('travelbite_current_user');
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar user={user} onLogout={handleLogout} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/login" 
              element={user ? <Navigate to="/" /> : <Login onLoginSuccess={handleLoginSuccess} />} 
            />
            <Route 
              path="/register" 
              element={user ? <Navigate to="/" /> : <Register />} 
            />
            <Route 
              path="/profile" 
              element={<ProfilePage user={user} />} 
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

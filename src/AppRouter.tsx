import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/login';
import PieDashboard from './pages/dashboard';


const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/pieDashboard" element={<PieDashboard/>}>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;


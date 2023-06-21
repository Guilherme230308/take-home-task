import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your components
import Dashboard from './components/Dashboard';
import App from './App';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard/>}>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from './Component/SignUpForm';
import Studentlist from './Component/Student';

function App() {
  return (
    <Router>
      {/* Wrap each route component with Route */}
      <Routes>
        <Route path="/" element={<Studentlist />} />
        <Route path="/SignUpForm" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
}

export default App;

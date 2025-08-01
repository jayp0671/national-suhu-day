import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Flowers from './pages/Flowers';
import Letter from './pages/Letter';
import Gift from './pages/Gift';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flowers" element={<Flowers />} />
          <Route path="/letter" element={<Letter />} />
          <Route path="/gift" element={<Gift />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
